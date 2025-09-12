export type ExamStatus = 'Not Started' |'Started' | 'Show Report'| 'Show Summary';

// State interface
export interface ExamModalState {
  IsModalStateOpen: boolean;
  ExamStatus:ExamStatus;
}

// Initial state
export const initialModalState: ExamModalState = {
  IsModalStateOpen: false,
  ExamStatus:'Started' as ExamStatus
};
