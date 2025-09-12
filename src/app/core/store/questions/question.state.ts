import { QuestionAdapt } from "../../exam/interfaces/questions";

export interface QuestionState {
  questions: QuestionAdapt[];
  currentQuestion: QuestionAdapt | null;
  wrongQuestions: QuestionAdapt[];
}

export const initialQuestionState: QuestionState = {
  questions: [],
  currentQuestion: null,
  wrongQuestions: []
};
