import React from 'react'
import { useParams } from 'react-router-dom';


import './TemplatePage.css'
import QuestionsCard from '../QuestionsCard/QuestionsCard'
import LangChooser from '../LangChooser/LangChooser';
import {templates_} from '../../Templates_'



function TemplatePage({ref_, handleSubmit, isLoading, currentLang, setLang}) {
const { templateId } = useParams();
  return (
    <div className='template-page-container h-100 w-100 d-flex  justify-content-center'>
        <div className='w-100'>
            <div className='template-page__header d-flex justify-content-between px-5 p-4 mb-5'>
                <div>{templates_[templateId].name}</div>
                <LangChooser currentLang={currentLang} setLang={setLang}/>
            </div>
            <div className='px-md-5 px-3'>
                <QuestionsCard ref={ref_} questions={templates_[templateId].questions} color={templates_[templateId].color} learnPrompot={templates_[templateId].prompt}/>
                <button  
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-100 mt-4 p-2 create_btn"
                >
                    {isLoading ? 'Generating...' : 'Create'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default TemplatePage