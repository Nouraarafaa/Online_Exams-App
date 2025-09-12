import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamModalState } from "./exam-modal.state";

// Feature selector (whole modal state object)
export const SelectModalState = createFeatureSelector<ExamModalState>('modal');

// Selector for the modal status
export const SelectModalStatus = createSelector(
  SelectModalState,
  (state) => state.IsModalStateOpen
);
export const SelectExamStatus = createSelector(
  SelectModalState,
  (state) => state.ExamStatus
);