import React from 'react'
import { Link } from 'react-router-dom';

import './TemplateCard.css'

function TemplateCard({name, description, id, setCurrentTemplate, color, icon = ''}) {
    function handeClick(){
        setCurrentTemplate(id)
    }
  return (
    <Link to={`/template/${id}`}>
      <div className='template-card-container p-2 d-flex align-items-center gap-3' onClick={handeClick}>
          <div className='template__icon-container' style={{backgroundColor: color}}>
                {icon}
          </div>
          <div>
              <div className='template__name'>{name}</div>
              <div className='template__description'>{description}</div>
          </div>
      </div>
    </Link>
  )
}

export default TemplateCard