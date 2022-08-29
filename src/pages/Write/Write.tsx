import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header/Header'
import styled from 'styled-components'

const Write = () => {
  return (
    <Layout>
      <Main>
        <Container>
          <MainHeader>
            <MainHeaderTitle>Ask a public question</MainHeaderTitle>
            <MainHeaderImg
              src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368"
              alt="header-image"
            />
          </MainHeader>
          <MainContents>
            <MainEditor>
              <EditorWrapper>
                <Editor>
                  <EditorContentWrapper>
                    <EditorTitle>Title</EditorTitle>
                    <EditorDesc>
                      Be specific and imagine you’re asking a question to another person
                    </EditorDesc>
                    <EditorInput
                      type="text"
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    />
                  </EditorContentWrapper>
                  <EditorContentWrapper>
                    <EditorTitle>Body</EditorTitle>
                    <EditorDesc>
                      Include all the information someone would need to answer your question
                    </EditorDesc>
                    <div>remirror</div>
                    <div>code</div>
                  </EditorContentWrapper>
                  <EditorContentWrapper>
                    <div className="tags-section1">
                      <EditorTitle>Tags</EditorTitle>
                      <EditorDesc>
                        Add up to 5 tags to describe what your question is about
                      </EditorDesc>
                    </div>
                    <div className="tags-section2">question</div>
                    <EditorInput type="text" placeholder="e.g. (ruby-on-rails .net sql-server" />
                  </EditorContentWrapper>
                </Editor>
                <button>button</button>
              </EditorWrapper>
            </MainEditor>
            <MainSide>side</MainSide>
          </MainContents>
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default Write

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(241, 242, 243);
`

const Main = styled.div``

const Container = styled.div`
  padding: 5rem 10%;
  /* display: flex;
  padding: 0 10%;
  min-height: 55em;
  display: flex;
  flex-direction: column;
  justify-content: center; */
`

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
`

const MainHeaderTitle = styled.h3`
  flex: 1;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const MainHeaderImg = styled.img`
  flex: 1;
  min-width: 20rem;
`

const MainContents = styled.div`
  display: flex;
`
const MainEditor = styled.div`
  /* flex: 3; */
  width: 80%;
`

const EditorWrapper = styled.div``

const Editor = styled.div`
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  margin: 0 2.5rem 1.5rem 0;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
  border-width: 0.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 1rem 2rem;
`

const EditorContentWrapper = styled.div`
  margin: 1.5rem 0;
`

const EditorTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.7rem 0;
`

const EditorDesc = styled.div`
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  color: rgb(88, 92, 96);
`

const EditorInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin: 0.5rem 0;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 0.3rem;

  ::placeholder {
    color: rgb(207, 204, 204);
    letter-spacing: 0.05rem;
  }

  :focus {
    border: 3px solid rgb(48, 130, 197);
    outline: 4px solid rgb(223, 238, 249);
    outline-offset: -2px;
  }
`

const MainSide = styled.div`
  background-color: lightblue;
`
