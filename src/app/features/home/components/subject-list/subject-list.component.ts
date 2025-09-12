import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IExam } from '../../../../core/exam/interfaces/exam';
import { Store } from '@ngrx/store';
import * as ModalSelectors from '../../../../core/store/exam/exam-modal.selectors';
import * as ModalActions from '../../../../core/store/exam/exam-modal.action';
import { AsyncPipe } from '@angular/common';
import { ExamComponent } from "../../../exam/components/exam/exam.component";
import { ExamScoreComponent } from "../../../exam/components/exam-score/exam-score.component";
import { ExamSummaryComponent } from '../../../exam/components/exam-summary/exam-summary.component';
import { ExamStatus } from '../../../../core/store/exam/exam-modal.state';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'],
  imports: [AsyncPipe, ExamComponent, ExamScoreComponent , ExamSummaryComponent]
})
export class SubjectListComponent implements OnInit, OnDestroy {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _subjectsService = inject(SubjectsService);
  private readonly _store = inject(Store);

  Exams: IExam[] = [];
  ModalStatus$!: Observable<boolean>;
  ExamStatus$!: Observable<ExamStatus>;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const sub = this._activatedRoute.paramMap.pipe(
      switchMap(params => {
        const _id = params.get('_id');
        if (!_id || _id.length !== 24) {
          console.error('Invalid subject id:', _id);
          return EMPTY; 
        }
        return this._subjectsService.GetSubjectList(_id);
      })
    ).subscribe({
      next: (res) => { this.Exams = res.exams; },
      error: (err) => { console.error('Error fetching exams:', err); }
    });

    this.subscriptions.push(sub);
    this.GetModalStatus();
    this.GetExamStatus();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  GetModalStatus() {
    this.ModalStatus$ = this._store.select(ModalSelectors.SelectModalStatus);
  }

  GetExamStatus() {
    this.ExamStatus$ = this._store.select(ModalSelectors.SelectExamStatus);
  }

  selectExam(examId: string) {
    this._store.dispatch(ModalActions.OpenModal({ examId }));
  }
}
