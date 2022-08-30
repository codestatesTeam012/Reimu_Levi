import React, {useCallback} from 'react'
import {useHelpers} from '@remirror/react'
import {MarkdownEditor} from '@remirror/react-editors/markdown'
import 'remirror/styles/all.css'
import {ThemeProvider} from '@remirror/react'
import {AllStyledComponent} from '@remirror/styles/emotion'
import styled from 'styled-components'

function MarkdownPreview() {
  const {getMarkdown} = useHelpers(true)

  return (
    <pre>
      <code>{getMarkdown()}</code>
    </pre>
  )
}

function MyEditor() {
  return (
    <ThemeProvider>
      <AllStyledComponent>
        <MarkdownEditorWrapper>
          <MarkdownEditor placeholder="Enter text...">
            <MarkDownPreviewWrapper>
              <MarkdownPreview />
            </MarkDownPreviewWrapper>
          </MarkdownEditor>
        </MarkdownEditorWrapper>
      </AllStyledComponent>
    </ThemeProvider>
  )
}

const Remirror = () => {
  return <MyEditor />
}

export default Remirror

const MarkdownEditorWrapper = styled.div`
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const MarkDownPreviewWrapper = styled.div`
  margin: 2rem 0;
  line-height: 1.5rem;
`
