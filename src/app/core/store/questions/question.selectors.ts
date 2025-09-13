import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionState } from "./question.state";

export const selectQuestionState = createFeatureSelector<QuestionState>('question');

export const selectCurrentQuestion = createSelector(
  selectQuestionState,
  (state): QuestionState['currentQuestion'] => state.currentQuestion
);

export const selectNumOfQuestions = createSelector(
  selectQuestionState,
  (state) => {
    return state.questions.length;
  }
);

export const selectNumOfWrongQuestions = createSelector(
  selectQuestionState,
  (state) => {
    return state.wrongQuestions.length;
  }

);
export const selectWrongQuestions = createSelector(
  selectQuestionState,
  (state) => state.wrongQuestions
);


