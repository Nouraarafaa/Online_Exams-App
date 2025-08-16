import { createAction, props } from "@ngrx/store";
import { ISubject } from "../../interfaces/cards-subjects";

export const LoadSubjects = createAction("[Subject] Load Subjects"); //Effect
export const SetSubjects = createAction("[Subject] Set Subjects" , props<{subjects: ISubject[]}>());
