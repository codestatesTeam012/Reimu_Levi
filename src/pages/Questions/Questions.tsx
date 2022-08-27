import React from 'react'
// import {useNavigate} from 'react-router-dom'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import QuestionCard from 'src/components/QuestionCard.tsx/QuestionCard'
import {toLocalScale} from 'src/utils/utill'
import styled from 'styled-components'

const Questions = () => {
  // const navigate = useNavigate()
  return (
    <Layout>
      <QuestionsBox>
        <LeftBox>
          <QuestionsHeader>
            <h1>All Questions</h1>
            <AuthButton mode="SignUp" text="Ask Questions" width={11}></AuthButton>
          </QuestionsHeader>
          <QuestionSubHeader>
            <span>{toLocalScale(12345623)} questions</span>
          </QuestionSubHeader>
          <QuestionsContent>
            {/* 15개씩 끊어서 보여줘야 한다 ^&^ */}
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </QuestionsContent>
          <Paginations>페이지 네이션 넣을 곳</Paginations>
        </LeftBox>
        <RightBox>2</RightBox>
      </QuestionsBox>
    </Layout>
  )
}

export default Questions

const QuestionsBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 77rem;
  @media (max-width: 740px) {
    width: 120%;
  }
`
const RightBox = styled.div`
  margin-left: 1rem;
  width: 32rem;
  background-color: skyblue;
`
const QuestionsHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-left: 2rem;
  /* align-items: center; */
  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    font-family: 'Rubik Iso', cursive;
  }
`
const QuestionSubHeader = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.7rem;
  }
`
const QuestionsContent = styled.div`
  height: 100%;
  margin-top: 2rem;
  border-top: solid 1px lightgray;
`

const Paginations = styled.div``
