import { createAction, props } from "@ngrx/store";
import { QuestionAdapt } from "../../exam/interfaces/questions";

export const loadQuestions = createAction('[Question] Load Questions' , props<{examId : string}>());
export const setQuestions = createAction('[Question] Set Questions' , props<{questions : QuestionAdapt[]}>());
export const setCurrentQuestion = createAction('[Question] Set Current Question' , props<{questions : QuestionAdapt }>());
export const UpdateQuestion = createAction('[Question] Update Question' , props<{ QId :string , SelectedAnswer:string }>());
export const onNext = createAction('[Question] Next Question');
export const onBack = createAction('[Question] Previous Question');
