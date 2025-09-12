import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";
import { QuestionAdapt, RootQ } from "../interfaces/questions";
@Injectable({
  providedIn: 'root'  
})
export class MainApiAdapter implements Adapter {

  QuestionAdapter(data: RootQ): QuestionAdapt[] {
    return data.questions.map((q, index) => ({
      answers: q.answers,
      _id: q._id,
      question: q.question,
      correct: q.correct,
      index: index ,
    }));
  }
  
}
