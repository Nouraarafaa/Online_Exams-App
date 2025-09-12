import { createReducer, on } from "@ngrx/store";
import { initialQuestionState } from "./question.state";
import * as QuestionActions from "../questions/question.action";

export const QuestionReducer = createReducer(
  initialQuestionState,

  // Set the current question
  on(QuestionActions.setCurrentQuestion, (state, { currentQuestion }) => ({
    ...state,
    currentQuestion,
  })),

  // Set all questions
  on(QuestionActions.setQuestions, (state, { questions }) => ({
    ...state,
    questions,
  })),

  // Update a question's selected answer
on(QuestionActions.UpdateQuestion, (state, { QId, selectedAnswer }) => {
  return {
    ...state,
    questions: state.questions.map(q =>
      q._id === QId ? { ...q, selectedAnswer: selectedAnswer } : q 
    )
  };
}),


  // Go to the next question (safe index handling)
  on(QuestionActions.onNext, (state) => {
    if (!state.currentQuestion) return state;

    const currentIndex = state.questions.findIndex(
      (q) => q._id === state.currentQuestion!._id
    );

    const nextQuestion = state.questions[currentIndex + 1];
    return nextQuestion
      ? { ...state, currentQuestion: nextQuestion }
      : state; // no change if last question
  }),

  // Go to the previous question (safe index handling)
  on(QuestionActions.onBack, (state) => {
    if (!state.currentQuestion) return state;

    const currentIndex = state.questions.findIndex(
      (q) => q._id === state.currentQuestion!._id
    );

    const prevQuestion = state.questions[currentIndex - 1];
    return prevQuestion
      ? { ...state, currentQuestion: prevQuestion }
      : state; // no change if first question
  }),

  // Filter wrong answers
  on(QuestionActions.FilterWA, (state) => {
    const wrong = state.questions.filter(q => q.selectedAnswer !== q.correct);
    console.log("Reducer FilterWA - wrongQuestions:", wrong);
    return { ...state, wrongQuestions: wrong };
  })



);
