import { QuestionAdapt, RootQ } from "./questions";

export interface Adapter {
  QuestionAdapter(data: RootQ): QuestionAdapt[];
}