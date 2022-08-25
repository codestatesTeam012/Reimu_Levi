import React from 'react'
import Layout from 'src/components/Layout/Layout'
import styled from 'styled-components'

const Tags = () => {
  return (
    <Layout>
      <TagsBox>Tags</TagsBox>
    </Layout>
  )
}

export default Tags

const TagsBox = styled.div`
  width: 100%;
  height: 200rem;
`
