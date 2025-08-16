import { ISubject } from './../../interfaces/cards-subjects';

export interface SubjectsState {
  subjects:ISubject[];
  IsLoading: boolean;
  Error: string | null;
}
export const initialSubjectsState: SubjectsState = {
  subjects: [] as ISubject[],
  IsLoading: false,
  Error: null,
};