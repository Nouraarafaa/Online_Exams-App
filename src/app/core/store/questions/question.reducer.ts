import { createReducer, on } from "@ngrx/store";
import { initialQuestionState } from "./question.state";
import * as QuestionActions from '../questions/question.action';

export const QuestionReducer = createReducer(initialQuestionState,
  on(QuestionActions.setCurrentQuestion, (state, {questions}) => {
    return {
      ...state,
      currentQuestion: questions
    };
  }
) ,
  on(QuestionActions.setQuestions, (state, {questions}) => {
    return {
      ...state,
      questions
    };
  }
) ,
  on(QuestionActions.UpdateQuestion, (state, {QId,SelectedAnswer}) => {
    return {
      ...state,
      questions: state.questions.map(q => q._id === QId ? {...q, SelectedAnswer} : q)
    };
  }
) ,
  on(QuestionActions.onNext, (state) => {
    return {
      ...state,
      currentQuestion: state.questions[state.currentQuestion!.index+1] 
    };
  }
) ,
  on(QuestionActions.onBack, (state) => {
    return {
      ...state,
      currentQuestion: state.questions[state.currentQuestion!.index-1] 
    };
  }
) ,

);