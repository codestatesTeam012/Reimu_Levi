import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import parse from 'html-react-parser'
interface Props {
  markdown: string
}

const MarkDownPreview = ({markdown}: Props) => {
  const result = parse(`
  <h3>asdasdasdas</h3>
  </p>asdasdasd</p>
  <span>asdasdas</span>
  <pre>
    <code>
myform.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const options = {
      mode: 'no-cors',
      method: 'POST',
      headers: {
          'content-type': 'application/json'},
      body: JSON.stringify(Object.fromEntries(formData))

  }


  fetch('https://api.tripleseat.com/v1/leads/create.js?lead_form_id=xxxxx&public_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', options)
      
  .then(function (response) {
      return response.text();
  }).then(function (text) {
      console.log(text);
  }).catch(function (error) {
  })
});
    </code>
  </pre>
  `)
  return (
    <MarkDownBox>
      {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
      {result}
    </MarkDownBox>
  )
}

export default MarkDownPreview

const MarkDownBox = styled.div`
  body {
    margin: 0 auto;
    font-family: Georgia, Palatino, serif;
    color: #444444;
    line-height: 1;
    max-width: 960px;
    padding: 30px;
  }
  h1,
  h2,
  h3,
  h4 {
    color: #111111;
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: 24px;
    padding: 0;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 36px;
    margin: 24px 0 6px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 21px;
  }
  h5 {
    font-size: 18px;
  }
  a {
    color: #0099ff;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  ul,
  ol {
    padding: 0;
    margin: 0;
  }
  li {
    line-height: 24px;
  }
  li ul,
  li ul {
    margin-left: 24px;
  }
  p,
  ul,
  ol {
    font-size: 16px;
    line-height: 24px;
    max-width: 540px;
  }
  pre {
    padding: 10px 24px;
    max-width: 800px;
    white-space: pre-wrap;
    background-color: hsl(0, 0%, 96.5%);
    border-radius: 1rem;
  }
  code {
    font-family: Consolas, Monaco, Andale Mono, monospace;
    line-height: 1.5;
    font-size: 13px;
  }
  aside {
    display: block;
    float: right;
    width: 390px;
  }
  blockquote {
    margin: 1em 2em;
    max-width: 476px;
  }
  blockquote p {
    color: #666;
    max-width: 460px;
  }
  hr {
    width: 540px;
    text-align: left;
    margin: 0 auto 0 0;
    color: #999;
  }
  table {
    border-collapse: collapse;
    margin: 1em 1em;
    border: 1px solid #ccc;
  }
  table thead {
    background-color: #eee;
  }
  table thead td {
    color: #666;
  }
  table td {
    padding: 0.5em 1em;
    border: 1px solid #ccc;
  }
`
