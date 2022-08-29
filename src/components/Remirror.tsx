import React, {useCallback} from 'react'
import type {RemirrorJSON} from 'remirror'
import {OnChangeJSON} from '@remirror/react'
import {useHelpers} from '@remirror/react'
import {MarkdownEditor} from '@remirror/react-editors/markdown'
import 'remirror/styles/all.css'
import {ThemeProvider} from '@remirror/react'
import {AllStyledComponent} from '@remirror/styles/emotion'

const STORAGE_KEY = 'remirror-editor-content'

interface MyEditorProps {
  onChange: (json: RemirrorJSON) => void
}

function MarkdownPreview() {
  const {getMarkdown} = useHelpers(true)

  return (
    <pre>
      <code>{getMarkdown()}</code>
    </pre>
  )
}

function MyEditor({onChange}: MyEditorProps) {
  return (
    <ThemeProvider>
      <AllStyledComponent>
        <div style={{padding: '1rem 0'}}>
          <MarkdownEditor placeholder="Enter text...">
            <OnChangeJSON onChange={onChange} />
            <MarkdownPreview />
          </MarkdownEditor>
        </div>
      </AllStyledComponent>
    </ThemeProvider>
  )
}

const Remirror = () => {
  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localstorage
    // console.log(JSON.stringify(json))
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json))
  }, [])

  return <MyEditor onChange={handleEditorChange} />
}

export default Remirror
