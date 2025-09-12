import { createReducer, on } from "@ngrx/store";
import { ExamStatus, initialModalState } from "./exam-modal.state";
import * as ModalActions from "./exam-modal.action";

export const ModalReducer = createReducer(
  initialModalState,
  on(ModalActions.OpenModal, (state) => ({
    ...state,
    IsModalStateOpen: true,
    ExamStatus: 'Started' as ExamStatus
  })),
  on(ModalActions.CloseModal, (state) => ({
    ...state,
    IsModalStateOpen: false
  })),
  on(ModalActions.SetExamStatus, (state , {ExamStatus}) => ({
    ...state,
    ExamStatus : ExamStatus
  })),
  on(ModalActions.ResetModalState, () => initialModalState),
);
