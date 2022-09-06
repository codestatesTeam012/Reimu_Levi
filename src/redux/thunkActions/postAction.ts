import {createAsyncThunk} from '@reduxjs/toolkit'
import {viewPostService} from 'src/apis/ViewPostAPI'
import {CreateAsyncThunkTypes} from '../store'

interface RepliesProps {
  replyId: number

  username: string

  content: string
}

interface Post {
  postsId: number
  title: string
  content: string
  view: number
  tags: {
    tagList: string
  }[]
  replies: RepliesProps[]
}

export const getPostThunk = createAsyncThunk<Post, number, CreateAsyncThunkTypes>(
  'post/getPost',
  async (id) => {
    const result = await viewPostService.getPostById(id)
    return result.data.data
  }
)
