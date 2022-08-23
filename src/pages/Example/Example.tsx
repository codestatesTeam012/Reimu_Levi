import React, {useState} from 'react'
import {addCount} from 'src/redux/reducers/testSlice'
import {RootState, useAppDispatch, useAppSelector} from 'src/redux/store'

const Example = () => {
  const [num] = useState(2)
  // useAppSelector() , useAppDispatch() 사용 예제
  const count = useAppSelector((state: RootState) => state.test.count)
  const dispatch = useAppDispatch()

  const handleUp = () => {
    dispatch(addCount(num))
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleUp}>up!</button>
    </>
  )
}

export default Example
