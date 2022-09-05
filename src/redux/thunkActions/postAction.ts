import {createAsyncThunk} from '@reduxjs/toolkit'
import {viewPostService} from 'src/apis/ViewPostAPI'
import {CreateAsyncThunkTypes} from '../store'

interface Post {
  postsId: number
  title: string
  content: string
  view: number
}

export const getPostThunk = createAsyncThunk<Post, number, CreateAsyncThunkTypes>(
  'post/getPost',
  async (id) => {
    const result = await viewPostService.getPostById(id)
    return result.data.data
  }
)
