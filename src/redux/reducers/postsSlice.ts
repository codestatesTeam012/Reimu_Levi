import {createSlice} from '@reduxjs/toolkit'
import {getPostsThunk} from '../thunkActions/postsAction'

export interface Post {
  postsId: number
  title: string
  content: string
}

export interface PageInfo {
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export interface IPosts {
  isLoading: boolean
  error: string
  posts: Post[]
  pageInfo: PageInfo | null
}

// 초기 상태 타입을 지정해줘야 합니다 !
const initialState: IPosts = {
  isLoading: false,
  error: 'string',
  posts: [],
  pageInfo: null,
}

// Slice가 store 에 등록
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostsThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.posts = payload.data
        state.pageInfo = payload.pageInfo
      })
      .addCase(getPostsThunk.rejected, (state, {payload}) => {
        state.isLoading = true
        if (payload) {
          state.error = '에러가 발생 했어요'
        }
      })
  },
})

// 만들어진 액션을 내보내 주세요.
// export const {} = testSlice.actions

export default postsSlice.reducer
