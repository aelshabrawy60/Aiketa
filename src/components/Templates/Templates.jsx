import React, { useEffect, useState } from 'react'

import './Templates.css'
import TemplateCard from '../TemplateCard/TemplateCard'

function Templates({ templates, searchQuery }) {
  const [currentTemplate, setCurrentTemplate] = useState(0)
  const [filteredTemplates, setFilteredTemplates] = useState(templates)

  useEffect(() => {
    // Make sure searchQuery is defined and filter templates
    const query = searchQuery ? searchQuery.toLowerCase() : ''
    setFilteredTemplates(
      templates.filter(template =>
        template.name.toLowerCase().includes(query)
      )
    )
  }, [searchQuery, templates])

  function handelCurrent(id) {
    setCurrentTemplate(id)
  }

  return (
    <div className='templates-container d-flex flex-column gap-3'>
      {filteredTemplates.map((template, i) => (
        <TemplateCard
          key={i}
          name={template.name}
          icon={template.icon}
          setCurrentTemplate={handelCurrent}
          color={template.color}
          id={i}
          description={template.description}
        />
      ))}
    </div>
  )
}

export default Templates
