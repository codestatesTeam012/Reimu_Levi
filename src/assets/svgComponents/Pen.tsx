import React from 'react'
import styled from 'styled-components'

const Pen = () => {
  return (
    <Container>
      <svg
        aria-hidden="true"
        className="va-text-top svg-icon iconPencilSm"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
      </svg>
    </Container>
  )
}

export default Pen

const Container = styled.div`
  width: 2rem;
  height: 2rem;
`
