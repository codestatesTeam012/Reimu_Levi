import {createSlice} from '@reduxjs/toolkit'
import {getPostThunk} from '../thunkActions/postAction'

export interface RepliesProps {
  replyId: number
  username: string
  content: string
}
export interface Post {
  postsId: number
  title: string
  content: string
  view: number
  tags: {
    tagList: string
  }[]
  replies: RepliesProps[]
}

export interface IPost {
  isLoading: boolean
  error: string
  post: Post | null
}

// 초기 상태 타입을 지정해줘야 합니다 !
const initialState: IPost = {
  isLoading: false,
  error: 'string',
  post: null,
}

// Slice가 store 에 등록
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.post = payload
      })
      .addCase(getPostThunk.rejected, (state, {payload}) => {
        state.isLoading = true
        if (payload) {
          state.error = '에러가 발생 했어요'
        }
      })
  },
})

// 만들어진 액션을 내보내 주세요.
// export const {} = testSlice.actions

export default postSlice.reducer
