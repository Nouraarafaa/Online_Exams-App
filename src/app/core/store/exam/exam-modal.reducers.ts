import { createReducer, on } from "@ngrx/store";
import { initialModalState, ModalStateOptions } from "./exam-modal.state";
import * as ModalActions from "./exam-modal.action";

export const ModalReducer = createReducer(
  initialModalState,
  on(ModalActions.OpenModal, (state) => ({ ...state, modalstate: 'Started' as ModalStateOptions })),
  on(ModalActions.CloseModal, (state) => ({ ...state, modalstate: 'Closed' as ModalStateOptions})),
  on(ModalActions.ResetModalState, () => initialModalState),
)