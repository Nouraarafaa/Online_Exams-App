import { SubjectsState } from './subjects.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const SelectSubjectsState = createFeatureSelector<SubjectsState>('subjects');

export const SelectAllSubjects = createSelector(SelectSubjectsState ,
  (state)=>state.subjects);