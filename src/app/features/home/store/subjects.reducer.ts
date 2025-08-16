import { createReducer , on } from "@ngrx/store";
import { initialSubjectsState } from "./subjects.state";
import * as SubjectsAction from "./subjects.actions";

export const SubjectsReducer = createReducer(
  initialSubjectsState,
  on(SubjectsAction.SetSubjects,(state , { subjects }) => ({...state, subjects:subjects, IsLoading: false, Error: null})),
  on(SubjectsAction.LoadSubjects, (state) => ({...state, IsLoading : true } )),
);