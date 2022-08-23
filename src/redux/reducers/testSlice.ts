import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ICount {
  count: number
}

// 초기 상태 타입을 지정해줘야 합니다 !
const initialState: ICount = {
  count: 0,
}

// Slice가 store 에 등록
export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    // 타입 : PayloadAction<type> , payload에 담겨올 타입을 넣어주세요 !
    addCount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    },
  },
})

// 만들어진 액션을 내보내 주세요.
export const {addCount} = testSlice.actions

export default testSlice.reducer
