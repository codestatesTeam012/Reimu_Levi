import React from 'react'
import styled from 'styled-components'

const UpDownUnit = () => {
  return (
    <Container className="svg-icon mtn2">
      <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
      <path
        opacity=".5"
        d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
      ></path>
    </Container>
  )
}

export default UpDownUnit

const Container = styled.svg`
  width: 2.6rem;
  height: 2.6rem;
  fill: rgb(58, 160, 253);
`
