import React from 'react'
import styled from 'styled-components'

const Industry = () => {
  return (
    <Container aria-hidden="true" className="svg-icon iconIndustry" viewBox="0 0 18 18">
      <path d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6c1.09 0 2 .91 2 2v2h2c1.09 0 2 .91 2 2v8h-6ZM4 4v2h2V4H4Zm0 4v2h2V8H4Zm4-4v2h2V4H8Zm0 4v2h2V8H8Zm-4 4v2h2v-2H4Zm8 0v2h2v-2h-2Zm0-4v2h2V8h-2Z"></path>
    </Container>
  )
}

export default Industry

const Container = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: rgb(255, 255, 255);
  margin-left: 0.2rem;
`
