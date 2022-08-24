import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {CreateAsyncThunkTypes} from '../store'

export const getAllTodo = createAsyncThunk<number, null, CreateAsyncThunkTypes>(
  'test/getTodo',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/test')
      // console.log(response)
      return response.data
    } catch (e) {
      throw new Error('테스트 실패 !')
    }
  }
)
