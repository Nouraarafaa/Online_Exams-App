import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IExam } from '../../../../core/exam/interfaces/exam';
import { QuestionResponse } from '../../../../core/exam/interfaces/questions';
import { Store } from '@ngrx/store';
import { ModalStateOptions } from '../../../../core/store/exam/exam-modal.state';
import * as ModalSelectors from '../../../../core/store/exam/exam-modal.selectors';
import * as ModalActions from '../../../../core/store/exam/exam-modal.action';
import { AsyncPipe } from '@angular/common';
import { ExamComponent } from "../../../exam/components/exam/exam.component";
import { log } from 'node:console';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'],
  imports: [AsyncPipe, ExamComponent]
})
export class SubjectListComponent implements OnInit{

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _subjectsService = inject(SubjectsService);
  private readonly _store = inject(Store);


  Exams: IExam[] = [];
  questions: QuestionResponse[] = [];
  currentQuestionIndex = 0;
  examId: string | null = null;


  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(
      switchMap(params => {
        const _id = params.get('_id');
        if (!_id || _id.length !== 24) {
          console.error('Invalid subject id:', _id);
          return EMPTY; 
        }
        return this._subjectsService.GetSubjectList(_id);
      })
    )
    .subscribe({
      next: (res) => {
        this.Exams = res.exams;
      },
      error: (err) => {
        console.error('Error fetching exams:', err);
      }
    });
    this.GetModalStatus();
  }


  ModalStatus$ !: Observable<ModalStateOptions>;
  GetModalStatus() {
    this.ModalStatus$ = this._store.select(ModalSelectors.SelectModalStatus);
    this.ModalStatus$.subscribe(status => {
      console.log('Current Modal Status:', status);
    });
  }


  OpenExamModal(){
    console.log('Opening Exam Modal');
    if (this.examId) {
      this._store.dispatch(ModalActions.OpenModal({ examId: this.examId }));
    } else {
      console.error('examId is null or undefined');
    }
  }

  selectExam(examId: string) {
  this.examId = examId;
  this.OpenExamModal();
}








}

  // GetAllQuestions(examId: string) {
  //   this._subjectsService.GetQuestions(examId).subscribe({
  //     next: (res) => {
  //       this.questions = res.questions;
  //       console.log('Questions:', this.questions);
  //       this.currentQuestionIndex = 0;
  //     },
  //     error: (err) => {
  //       console.error('Failed to load questions', err);
  //     }
  //   });
  // }

//   showModal: 'instructions' | 'questions' | null = null;

//   timer: number = 15 * 60;
//   interval!: ReturnType<typeof setInterval>;
//   selectedAnswers: { [key: number]: string } = {}; 

//   openModal(type: 'instructions' | 'questions') {
//     this.showModal = type;
//   }

//   closeModal() {
//     this.showModal = null;
//   }

//   get formattedTimer(): string {
//     const minutes = Math.floor(this.timer / 60);
//     const seconds = this.timer % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   }

//   startTimer() {
//     this.interval = setInterval(() => {
//       if (this.timer > 0) {
//         this.timer -= 1;
//       } else {
//         clearInterval(this.interval);
//         this.submitExam();
//       }
//     }, 1000);
//   }


//   nextQuestion() {
//     this.currentQuestionIndex = Math.min(this.currentQuestionIndex + 1, this.questions.length - 1);
//   }

//   prevQuestion() {
//     this.currentQuestionIndex = Math.max(this.currentQuestionIndex - 1, 0);
//   }



//   ngOnDestroy(): void {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//     }
// startExam(examId: string) {
//   this.examId = examId;                // save selected exam
//   this.GetAllQuestions(examId);        // fetch questions for it
//   this.openModal('instructions');      // just show instructions for now
// }

// beginQuestions() {
//   this.openModal('questions');         // switch to questions modal
//   this.startTimer();                   // start countdown only here
// }






