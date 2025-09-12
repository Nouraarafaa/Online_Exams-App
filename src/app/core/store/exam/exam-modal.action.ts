import { createAction, props } from "@ngrx/store";

export const OpenModal = createAction('[Exam Modal] Open Modal ', props<{ examId: string }>());
export const CloseModal = createAction('[Exam Modal] Close Modal');
export const ResetModalState = createAction('[Exam Modal] Reset Modal State');
