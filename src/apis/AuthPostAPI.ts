import axios from 'axios'
import {getCookie} from 'src/utils/cookie'
import {SERVER_URL} from '.'
import {IWrite} from './type/types'

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

export const authPostService = {
  writePost,
  deletePost,
  editPost,
}
