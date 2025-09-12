// Union type for modal status
export type ModalStateOptions = 'Not Started' | 'Started' | 'Closed';

// State interface
export interface ExamModalState {
  modalstate: ModalStateOptions;
}

// Initial state
export const initialModalState: ExamModalState = {
  modalstate: 'Not Started',
};
