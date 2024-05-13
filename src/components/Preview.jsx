import React from 'react'
import Markdown from "react-markdown"
export default function Preview({markdown}) {
  return (
    <div className='p-5'>
        <Markdown>{markdown}</Markdown>
    </div>
  )
}
