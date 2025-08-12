export interface Root {
  message: string
  metadata: Metadata
  subjects: ISubject[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface ISubject {
  _id: string
  name: string
  icon: string
  createdAt: string
}
