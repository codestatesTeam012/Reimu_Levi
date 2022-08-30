import React from 'react'
import {useHelpers} from '@remirror/react'

function MarkdownPreview() {
  const {getMarkdown} = useHelpers(true)
  return (
    <pre>
      <code>{getMarkdown()}</code>
    </pre>
  )
}
export default MarkdownPreview
