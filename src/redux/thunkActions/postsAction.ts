import {createAsyncThunk} from '@reduxjs/toolkit'
import {viewPostService} from 'src/apis/ViewPostAPI'
import {Posts} from '../reducers/postsSlice'
import {CreateAsyncThunkTypes} from '../store'

// createAsyncThunk<리턴타입 , 받는인자타입, ThunkAPI 사용할때 타입>

export const getPostsThunk = createAsyncThunk<Posts[], number, CreateAsyncThunkTypes>(
  'posts/getPosts',
  async (pageNum) => {
    const result = await viewPostService.getPosts(pageNum)
    return result.data
  }
)
