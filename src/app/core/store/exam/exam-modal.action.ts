import { createAction, props } from "@ngrx/store";
import { ExamStatus } from "./exam-modal.state";

export const OpenModal = createAction('[Exam Modal] Open Modal ', props<{ examId: string }>());
export const CloseModal = createAction('[Exam Modal] Close Modal');
export const ResetModalState = createAction('[Exam Modal] Reset Modal State');
export const SetExamStatus = createAction('[Exam Modal] Set Exam Status', props<{ ExamStatus: ExamStatus }>());
