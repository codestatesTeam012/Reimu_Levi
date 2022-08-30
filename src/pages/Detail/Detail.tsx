/* eslint-disable react/no-children-prop */
import React, {useCallback, useState} from 'react'
import {OnChangeHTML} from '@remirror/react'
import {MarkdownEditor} from '@remirror/react-editors/markdown'
import styled from 'styled-components'
import MarkdownPreview from './MarkdownPreview'
import BackClock from 'src/assets/svgComponents/BackClock'
import IconBookMark from 'src/assets/svgComponents/IconBookMark'
import UpDownIcon from 'src/assets/svgComponents/UpDownIcon'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import MarkDownPreview from 'src/components/MarkDownPreview/MarkDownPreview'
import PosticCard from 'src/components/PosticCard/PosticCard'
import TagCard from 'src/components/TagCard/TagCard'
import {contents1, contents2, markdown, TagsArr} from 'src/utils/etc'

const Detail = () => {
  const [content, setContent] = useState('')
  const handleEditorChangeHTML = useCallback((html: string) => {
    setContent(html)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('content', content)
  }
  return (
    <Layout>
      <Container>
        <Header>
          <TitleBox>
            <h1>How to access gitlab-ce web pages?</h1>
            <AuthButton mode="SignUp" text="Ask Questions" width={11} />
          </TitleBox>
          <SubBox>
            <div>
              <h3>Asked</h3>
              <span>today</span>
            </div>
            <div>
              <h3>Modified</h3>
              <span>today</span>
            </div>
            <div>
              <h3>Viewed</h3>
              <span>today</span>
            </div>
          </SubBox>
        </Header>
        <Content>
          <LeftContent>
            <Quesionts>
              <UtilIcons>
                <UpDownIcon mode="up" />
                <Count>0</Count>
                <UpDownIcon mode="down" />
                <IconBookMark />
                <BackClock />
              </UtilIcons>
              <MainContent>
                <MarkDownPreview markdown={markdown} />
                <Tags>
                  {TagsArr.map((tag) => (
                    <TagCard tag={tag} key={tag} />
                  ))}
                </Tags>
                <BottomContent>
                  <ShareInfo>
                    <span>Share</span>
                    <span>Follow</span>
                    {/* 로그인 시 보여야 하는 정보 */}
                    <span>Edit</span>
                    <span>Flag</span>
                  </ShareInfo>
                  <UserInfo>HwanMini</UserInfo>
                </BottomContent>
              </MainContent>
            </Quesionts>
            <CommentInfoWord>Add a comment</CommentInfoWord>
            <CommentInfo>
              Know someone who can answer? Share a link to this <span>question</span>
              via <span> email</span>, <span>Twitter</span>, or <span>Facebook</span>. Your Answer
            </CommentInfo>
            <CommentBox>커멘트 ~</CommentBox>
            <CommentForm onSubmit={handleSubmit}>
              <MarkdownEditor placeholder="Start typing...">
                <OnChangeHTML onChange={handleEditorChangeHTML} />
                <ButtonBox>
                  <AuthButton mode="SignUp" text="Post Your Answer" width={20} />
                </ButtonBox>
                <MarkdownPreview />
              </MarkdownEditor>
            </CommentForm>
          </LeftContent>
          <RightContent>
            <Postic>
              <PosticCard title="The Overflow Blog" contents={contents1} />
              <PosticCard title="Featured on Meta" contents={contents2} />
            </Postic>
          </RightContent>
        </Content>
      </Container>
    </Layout>
  )
}

export default Detail

const Container = styled.div``

const Header = styled.div`
  margin: 2rem 2rem;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: hsl(210, 8%, 25%);
    font-size: 2.7rem;
  }
`
const SubBox = styled.div`
  display: flex;
  font-size: 1.35rem;
  margin-top: 1rem;
  div {
    display: flex;
    margin-right: 2rem;
  }
  h3 {
    color: hsl(210, 8%, 45%);
    margin-right: 0.5rem;
  }
  padding-bottom: 2rem;
  border-bottom: solid 1px lightgray;
`
const Content = styled.div`
  display: flex;
  margin-left: 2rem;
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 72.7rem;
`

const RightContent = styled.div`
  margin-left: 2rem;
  width: 30rem;
`
const UtilIcons = styled.div`
  width: 6.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Count = styled.span`
  font-size: 2rem;
  color: gray;
  font-weight: bold;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65.9rem;
`

const Tags = styled.div`
  margin-top: 1.5rem;
  display: flex;
`

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const ShareInfo = styled.div`
  display: flex;

  span {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
  }
`
const UserInfo = styled.div`
  font-size: 1.3rem;
`

const Quesionts = styled.div`
  display: flex;
`

const Postic = styled.div`
  margin-top: 2rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  border: solid 1px hsl(210, 8%, 85%);
`

const CommentInfoWord = styled.p`
  margin-top: 8rem;
  margin-left: 7rem;
  color: hsl(210, 8%, 55%);
  font-size: 1.3rem;
`

const CommentInfo = styled.p`
  margin-top: 4rem;
  color: black;
  font-size: 1.7rem;

  span {
    color: hsl(206, 100%, 40%);
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`

const CommentBox = styled.div`
  margin-top: 2rem;
`

const CommentForm = styled.form`
  margin-bottom: 10rem;
  margin-top: 2rem;
  font-size: 1.5rem;
`

const ButtonBox = styled.div`
  margin-top: 1rem;
`
