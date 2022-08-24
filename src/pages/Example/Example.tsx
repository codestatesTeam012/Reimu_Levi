import React, {useEffect, useState} from 'react'
import {addCount} from 'src/redux/reducers/testSlice'
import {RootState, useAppDispatch, useAppSelector} from 'src/redux/store'
import {getAllTodo} from 'src/redux/thunkActions/testAction'

const Example = () => {
  const [num] = useState(2)
  // useAppSelector() , useAppDispatch() 사용 예제
  // const count = useAppSelector((state: RootState) => state.test.count)
  const {count, isLoading, error} = useAppSelector((state: RootState) => state.test)
  const dispatch = useAppDispatch()
  console.log(count)

  useEffect(() => {
    dispatch(getAllTodo(null))
  }, [])

  const handleUp = () => {
    dispatch(addCount(num))
  }
  if (error) return <span> Error!! 👻</span>
  if (isLoading) return <span> isLoading 👻</span>
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleUp}>up!</button>
    </>
  )
}

export default Example
