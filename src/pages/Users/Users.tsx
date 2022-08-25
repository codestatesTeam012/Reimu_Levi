import React from 'react'
import Layout from 'src/components/Layout/Layout'
import styled from 'styled-components'

const Users = () => {
  return (
    <Layout>
      <UsersBox>Users</UsersBox>
    </Layout>
  )
}

export default Users

const UsersBox = styled.div`
  width: 100%;
  height: 111.5rem;
`
