import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionState } from "./question.state";

export const SelectQuestionState = createFeatureSelector<QuestionState>('question');

export const SelectCurrentQuestion = createSelector(
  SelectQuestionState,
  (state) => state.currentQuestion
);
export const SelectNumOfQuestions = createSelector(
  SelectQuestionState,
  (state) => state.questions.length
);
export const SelectNumOfWrongQuestions = createSelector(
  SelectQuestionState,
  (state) => state.wrongQuestions
);