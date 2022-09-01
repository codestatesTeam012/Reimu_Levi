import {createAsyncThunk} from '@reduxjs/toolkit'
import {viewPostService} from 'src/apis/ViewPostAPI'
import {PageInfo, Post} from '../reducers/postsSlice'
import {CreateAsyncThunkTypes} from '../store'

// createAsyncThunk<리턴타입 , 받는인자타입, ThunkAPI 사용할때 타입>

interface ReturnType {
  data: Post[]
  pageInfo: PageInfo
}

export const getPostsThunk = createAsyncThunk<ReturnType, number, CreateAsyncThunkTypes>(
  'posts/getPosts',
  async (pageNum) => {
    const result = await viewPostService.getPosts(pageNum)
    return result.data
  }
)
