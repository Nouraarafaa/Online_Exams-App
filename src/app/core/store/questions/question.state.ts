import { QuestionAdapt } from "../../exam/interfaces/questions";

export interface QuestionState{
  questions: QuestionAdapt[];
  currentQuestion: QuestionAdapt | null;
  wrongQuestions: QuestionAdapt[];
}
export const initialQuestionState: QuestionState = { 
  questions: [] as QuestionAdapt[],
  currentQuestion: null,
  wrongQuestions: [] as QuestionAdapt[]
}
