import React from 'react'

const FlixContainer = ({ flix }) => {

  const renderFlix = () => flix.map(flix => {
    console.log(flix)
    return <p>{flix.title}</p>
  })

  return (
    <div>
      {renderFlix()}
    </div>
  )
}

export default FlixContainer
