export interface ILogin {
  username: FormDataEntryValue | null
  password: FormDataEntryValue | null
}

export interface ISingUp {
  username: string
  email: string
  password: string
}

export interface decodedType {
  exp: number
  id: number
  sub: string
  username: string
}

export interface IWrite {
  title: string
  content: string
  username: string
}

export interface ICommentWrite {
  content: string
}
