/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-children-prop */
import React, {useCallback, useEffect, useState} from 'react'
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
import {contents1, contents2, TagsArr} from 'src/utils/etc'
import {useNavigate, useParams} from 'react-router-dom'
import {getUser} from 'src/utils/localstorage'
import {RootState, useAppDispatch, useAppSelector} from 'src/redux/store'
import {getPostThunk} from 'src/redux/thunkActions/postAction'
import {authPostService} from 'src/apis/AuthPostAPI'

const Detail = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch()
  const {post, isLoading} = useAppSelector((state: RootState) => state.post)
  const user = getUser()
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getPostThunk(Number(id)))
  }, [])

  const handleEditorChangeHTML = useCallback((html: string) => {
    setContent(html)
  }, [])

  const handleDeleteQuestion = async () => {
    if (!post) {
      return window.alert('조회하려는 글이 없습니다.')
    }
    const result = await authPostService.deletePost(post?.postsId)
    if (result.status === 204) {
      navigate('/questions')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = getUser()
    if (!user) {
      return window.alert('로그인 후 사용해 주세요.')
    }
    const form = {
      // username: user.username,
      content,
    }

    const result = await authPostService.writeComment(Number(id), form)
    if (result.status === 201) {
      setContent('')
    }
    // navigate(`/questions/${id}`)
    window.location.replace(`/questions/${id}`)
  }

  const handleDeleteComment = async (replyId: number) => {
    const result = await authPostService.deleteComment(Number(replyId))
    if (result.status === 204) window.location.replace(`/questions/${id}`)
  }

  if (isLoading || !post) return <div>로딩중 입니다</div>

  return (
    <Layout>
      <Container>
        <Header>
          <TitleBox>
            <h1>{post.title}</h1>
            <AuthButton
              mode="SignUp"
              text="Ask Questions"
              width={11}
              onClick={() => {
                navigate('/write')
              }}
            />
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
              <span>{post.view}</span>
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
                <MarkDownPreview content={post.content} />
                <Tags>
                  {post.tags.map((obj: any) => (
                    <TagCard tag={obj.tagList} key={obj.tagList} />
                  ))}
                </Tags>
                <BottomContent>
                  <ShareInfo>
                    <span>Share</span>
                    <span>Flag</span>
                    {user ? (
                      <>
                        <span onClick={handleDeleteQuestion}>Delete</span>
                        <span onClick={() => navigate(`/edit/${id}`)}>Edit</span>
                      </>
                    ) : null}
                  </ShareInfo>
                  <UserInfo>HwanMini</UserInfo>
                </BottomContent>
              </MainContent>
            </Quesionts>
            <CommentInfoWord>Add a comment</CommentInfoWord>
            <MainAnswer>Answer(s)</MainAnswer>
            {post.replies.map((reply, idx) => {
              return (
                <CommentWrapper key={idx}>
                  <Quesionts>
                    <UtilIcons>
                      <UpDownIcon mode="up" />
                      <Count>0</Count>
                      <UpDownIcon mode="down" />
                      <BackClock />
                    </UtilIcons>
                    <MainContent>
                      <MarkDownPreview content={reply.content} />
                      <BottomContent>
                        <ShareInfo>
                          <span>Share</span>
                          <span>Follow</span>
                          {user ? (
                            <>
                              <span onClick={() => handleDeleteComment(reply.replyId)}>Delete</span>
                              <span>Edit</span>
                            </>
                          ) : null}
                        </ShareInfo>
                        <UserInfo>{reply.member.username}</UserInfo>
                      </BottomContent>
                    </MainContent>
                  </Quesionts>
                  <CommentInfoWord>Add a comment</CommentInfoWord>
                </CommentWrapper>
              )
            })}
            <CommentInfo>
              Know someone who can answer? Share a link to this <span>question</span>
              via <span> email</span>, <span>Twitter</span>, or <span>Facebook</span>. Your Answer
            </CommentInfo>
            <CommentBox />
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

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

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

const MainAnswer = styled.h1`
  font-size: 2rem;
  margin: 5rem 0 1rem 1.5rem;
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
    font-size: 1.3rem;
    color: rgb(139, 145, 153);
    cursor: pointer;
  }
`
const UserInfo = styled.div`
  font-size: 1.3rem;
  color: rgb(74, 144, 215);
`

const CommentWrapper = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
  padding: 2rem 0;
`

const Quesionts = styled.div`
  display: flex;
`

const Postic = styled.div`
  margin-top: 2rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  border: solid 1px rgb(214, 217, 220);
`

const CommentInfoWord = styled.p`
  margin-top: 2rem;
  margin-left: 7rem;
  color: rgb(181, 186, 191);
  font-size: 1.3rem;
  cursor: pointer;
`

const CommentInfo = styled.p`
  margin-top: 4rem;
  color: black;
  font-size: 1.7rem;
  line-height: 3rem;

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
