export interface RootQ {
  message: string
  questions: QuestionResponse[]
}

export interface QuestionResponse {
  answers: Answer[]
  type: string
  _id: string
  question: string
  correct: string
  subject: any
  exam: Exam
  createdAt: string
}

export interface Answer {
  answer: string
  key: string
}

export interface Exam {
  _id: string
  title: string
  duration: number
  subject: string
  numberOfQuestions: number
  active: boolean
  createdAt: string
}

export interface QuestionAdapt{
  answers: Answer[]
  _id: string
  question: string
  correct: string
  index:number
  selectedAnswer?:string
} 
