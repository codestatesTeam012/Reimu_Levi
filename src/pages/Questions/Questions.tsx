import React from 'react'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import styled from 'styled-components'

const Questions = () => {
  return (
    <Layout>
      <QuestionsBox>
        <LeftBox>
          <QuestionsHeader>
            <h1>All Questions</h1>
            <AuthButton mode="SignUp" text="Ask Questions" width={11}></AuthButton>
          </QuestionsHeader>
          <QuestionSubHeader></QuestionSubHeader>
          <QuestionsContent></QuestionsContent>
        </LeftBox>
        <RightBox>2</RightBox>
      </QuestionsBox>
    </Layout>
  )
}

export default Questions

const QuestionsBox = styled.div`
  display: flex;
  height: 220rem;
  width: 100%;

  /* margin: 1rem; */
`
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 77rem;
  height: 210rem;
  border: solid 1px black;
`
const RightBox = styled.div`
  margin-left: 1rem;
  height: 210rem;
  width: 32rem;
  background-color: skyblue;
`
const QuestionsHeader = styled.div`
  height: 6rem;

  h1 {
    font-size: 5rem;
  }
`
const QuestionSubHeader = styled.div``
const QuestionsContent = styled.div``
