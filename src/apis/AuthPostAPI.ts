import axios from 'axios'
import {getCookie} from 'src/utils/cookie'
import {SERVER_URL} from '.'
import {ICommentWrite, IWrite} from './type/types'

const AuthPostAPI = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${getCookie('accessToken')}`,
  },
})

export const writePost = async (WriteForm: IWrite) => {
  try {
    const result = await AuthPostAPI.post(`v1/posts/create`, WriteForm)
    return result
  } catch {
    throw new Error('질문 쓰기 실패 👻')
  }
}

export const deletePost = async (id: number) => {
  try {
    const result = await AuthPostAPI.delete(`v1/posts/${id}`)
    return result
  } catch {
    throw new Error('글 삭제 실패 👻')
  }
}

export const editPost = async (id: number, EditForm: IWrite) => {
  try {
    const result = await AuthPostAPI.patch(`v1/posts/${id}`, EditForm)
    return result
  } catch {
    throw new Error('글 수정 실패 👻')
  }
}

export const writeComment = async (id: number, WriteForm: ICommentWrite) => {
  try {
    const result = await AuthPostAPI.post(`v1/reply/${id}`, WriteForm)
    return result
  } catch {
    throw new Error('코멘트 쓰기 실패 👻')
  }
}

export const deleteComment = async (id: number) => {
  try {
    const result = await AuthPostAPI.delete(`v1/reply/${id}`)
    return result
  } catch {
    throw new Error('코멘트 삭제 실패 👻')
  }
}

export const editComment = async (id: number, EditForm: IWrite) => {
  try {
    const result = await AuthPostAPI.patch(`v1/reply/${id}`, EditForm)
    return result
  } catch {
    throw new Error('코멘트 수정 실패 👻')
  }
}

export const authPostService = {
  writePost,
  deletePost,
  editPost,
  writeComment,
  deleteComment,
  editComment,
}
