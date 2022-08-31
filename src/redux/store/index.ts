import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import postsSlice from '../reducers/postsSlice'
import testSlice from '../reducers/testSlice'

export const store = configureStore({
  reducer: {
    // 사용할 Slice를 reducer에 등록 해주세요 !
    test: testSlice,
    posts: postsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/*
사용할 때 useAppDispatch(), useAppSelector() 를 사용해 주세요 !
Ex) Page 사용 예시
const dispatch = useAppDispatch();
const reservations = useAppSelector((state: RootState) => state.reservations.value);
자세한건 pages안에 Example파일을 참고해주세요.
*/

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// thunk 안에서 사용할 타입
export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch
  state: RootState
  rejectValue: string
}
