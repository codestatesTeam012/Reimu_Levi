import React from 'react'
import styled from 'styled-components'

interface Props {
  mode: 'up' | 'down'
}

const UpDownIcon = ({mode}: Props) => {
  const SVG =
    mode === 'down' ? (
      <svg
        aria-hidden="true"
        className="svg-icon iconArrowDownLg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 11h32L18 27 2 11Z"></path>
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        className="svg-icon iconArrowUpLg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 25h32L18 9 2 25Z"></path>
      </svg>
    )

  return <Container>{SVG}</Container>
}

export default UpDownIcon

const Container = styled.div`
  fill: lightgray;
  cursor: pointer;
`
