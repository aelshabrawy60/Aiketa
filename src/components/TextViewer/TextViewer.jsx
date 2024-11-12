import React, { useEffect, useRef, useState } from 'react'

import './TextViewer.css'
import { VscCopy } from "react-icons/vsc";

function TextViewer({text}) {

  const [localText, setLocalText] = useState(text)
  const editorRef = useRef(null);

  useEffect(() => {
    setLocalText(text)
  }, [text]) // Update local state when prop changes

  const handleChange = (e) => {
    setLocalText(e.target.value)
  }

  const copyToClipboard = () => {
    if (editorRef.current) {
      const textToCopy = editorRef.current.innerText; // Get the plain text content
      navigator.clipboard.writeText(textToCopy).then(() => {
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };
  
  return (
    <div className='text-viewer-container h-100 p-md-5 p-3'>
        <div className='copy-container fs-4 justify-content-end d-flex'>
            <button onClick={copyToClipboard}><VscCopy /></button>
        </div>
        <div className='text-area p-md-5 p-3 h-100' style={{overflowY: 'scroll'}}>
            <div ref={editorRef} id="editable" contenteditable="true" dangerouslySetInnerHTML={{ __html: localText }}></div>
        </div>
    </div>
  )
}

export default TextViewer