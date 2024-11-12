import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import generateResponse from './generateResponse'
import TextViewer from './components/TextViewer/TextViewer'
import QuestionsCard from './components/QuestionsCard/QuestionsCard'
import Templates from './components/Templates/Templates'
import Home from './components/Home/home'
import TemplatePage from './components/TemplatePage/TemplatePage';





function App() {
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [lang, setLang] = useState('English')
  const childRef = useRef();


  function handleLangChange(lang){
    setLang(lang)
  }

  useEffect(()=>{
    console.log(lang)
  },[lang])
  async function handleSubmit() {
    const temp = childRef.current.createUserInput();
    let prompt = temp[0]
    let learningPrompot = temp[1]
    console.log(prompt);
    console.log(learningPrompot)
    try {
      setIsLoading(true)
      const result = await generateResponse(prompt, learningPrompot, lang)
      setResponse(result)
    } catch (error) {
      console.error('Error generating response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="">
      <div className='wraper'>
        <div className='row row-gap-5 m-0 h-100'>
          <div className='col-md-5 col-12 p-0 h-100'>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/template/:templateId" element={<TemplatePage currentLang={lang} setLang={handleLangChange} ref_={childRef} handleSubmit={handleSubmit} isLoading={isLoading}/>} />
              </Routes>
            </Router>
          </div>
          <div className='col-md col-12 h-100 p-0'>
            <TextViewer text={response} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App