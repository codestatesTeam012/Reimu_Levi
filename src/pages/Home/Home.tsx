import axios from 'axios'
import React, {useEffect} from 'react'

const Home = () => {
  useEffect(() => {
    axios.get('http://3.35.208.55:8080/v1/example').then((res) => console.log(res))
  }, [])
  return (
    <>
      <h1>Hello Home</h1>
    </>
  )
}

export default Home
