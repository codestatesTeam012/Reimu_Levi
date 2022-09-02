import axios from 'axios'
import {SERVER_URL} from '.'

const postAPI = axios.create({baseURL: SERVER_URL, timeout: 1000})

export const getPosts = async (pageNum: number) => {
  try {
    const result = await postAPI.get(`/v1/posts?size=15&page=${pageNum}`)
    return result
  } catch {
    throw new Error('전체 질문 조회 실패 👻')
  }
}

export const getPostById = async (id: number) => {
  try {
    const result = await postAPI.get(`/v1/posts/${id}`)
    return result
  } catch {
    throw new Error('글 상세 조회 실패 👻')
  }
}

export const viewPostService = {
  getPosts,
  getPostById,
}
