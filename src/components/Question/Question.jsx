import React, { useState } from 'react'
import './Question.css'

function hexToRgba(hex, alpha = 0.5) {
    // Remove "#" if it exists
    hex = hex.replace(/^#/, '')

    // Parse r, g, b values
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function Question({ question, setAnswer, index, color }) {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
        setAnswer(index, e.target.value)
    }

    return (
        <div className='question-container'>
            <div
                className='question__header px-3 py-3'
                 // 50% transparency
            >
                {question}
            </div>
            <div className='question__answer-container p-3'>
                <textarea value={value} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Question
