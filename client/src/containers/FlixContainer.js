import React from 'react'
import FlixCard from '../components/FlixCard';

const FlixContainer = ({ flix }) => {

  const renderFlix = () => flix.map(flix => {
    return <FlixCard key={flix.netflixid} img={flix.image} title={flix.title} synopsis={flix.synopsis}/>
  })

  const truncateDescription = desc => {

  }

  return (
    <div>
      {renderFlix()}
    </div>
  )
}

export default FlixContainer
