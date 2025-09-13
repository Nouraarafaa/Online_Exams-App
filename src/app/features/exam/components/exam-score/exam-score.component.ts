import { CloseModal } from './../../../../core/store/exam/exam-modal.action';
import { Component, inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as QuestionSelectors from '../../../../core/store/questions/question.selectors';
import * as QuestionActions from '../../../../core/store/questions/question.action';
import { isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { distinctUntilChanged, take } from 'rxjs/operators';

@Component({
  selector: 'app-exam-score',
  standalone: true,
  templateUrl: './exam-score.component.html',
  styleUrls: ['./exam-score.component.scss']
})
export class ExamScoreComponent implements OnInit, AfterViewInit {

  private readonly _store = inject(Store);
  platformId = inject(PLATFORM_ID);

  numQ = 0;
  numberOfWrongAnswers = 0;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngOnInit(): void {
    // Dispatch to filter wrong answers first
    this._store.dispatch(QuestionActions.FilterWA());

    // Wait a tick to allow store to update
    setTimeout(() => this.subscribeToStore(), 0);
  }

  subscribeToStore() {
    // Subscribe to total questions
    this._store.select(QuestionSelectors.selectNumOfQuestions)
      .pipe(distinctUntilChanged())
      .subscribe(num => {
        this.numQ = num;
        this.updateChart();
      });

    // Subscribe to wrong answers
    this._store.select(QuestionSelectors.selectNumOfWrongQuestions)
      .pipe(distinctUntilChanged())
      .subscribe(num => {
        this.numberOfWrongAnswers = num;
        this.updateChart();
      });
  }

  updateChart() {
    if (this.chart && this.numQ != null && this.numberOfWrongAnswers != null) {
      this.chart.data.datasets[0].data = [
        this.numQ - this.numberOfWrongAnswers, // Correct
        this.numberOfWrongAnswers               // Wrong
      ];
      this.chart.update();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const config: ChartConfiguration<'doughnut'> = {
        type: 'doughnut',
        data: {
          labels: ['Correct', 'Wrong'],
          datasets: [{
            label: 'Exam Results',
            data: [0, 0], // start empty, will update later
            backgroundColor: ['green', 'red'],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          cutout: '50%',
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      };

      this.chart = new Chart(this.chartCanvas.nativeElement, config);
    }
  }

  CloseModal(){
    this._store.dispatch({type: '[Exam Modal] Reset Modal State'});
    this._store.dispatch({type: '[Question] Reset Q State'});
  }
}
