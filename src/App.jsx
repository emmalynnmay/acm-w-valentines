import './App.css'
import ValentineViewer from './components/ValentineViewer'
import { useState } from 'react'

import Example from './components/pages/Example'
import Example1 from './components/pages/Example1'
// Import your component here!
import EmmaMay from './components/pages/EmmaMay'
import AnnieHouston from './components/pages/AnnieHouston'
import HaleySmith from './components/pages/HaleySmith'

// Once you've imported your component, add it to CARDS
const CARDS = [Example, Example1, EmmaMay, AnnieHouston, HaleySmith]

function App() {

  const [cardIndex, setCardIndex] = useState(0)

  const canAdvance = () => {
    return (cardIndex + 1) <= (CARDS.length - 1)
  }

  const canGoBack = () => {
    return (cardIndex - 1) >= 0
  }

  const nextCard = () => {
    setCardIndex(cardIndex + 1)
  }

  const lastCard = () => {
    setCardIndex(cardIndex - 1)
  }

  return (
    <div>
      <h1>USU ACM-W Valentines Box ❤️</h1>
      <button className='nav-button' onClick={lastCard} disabled={!canGoBack()}>Previous</button>
      <button className='nav-button' onClick={nextCard} disabled={!canAdvance()}>Next</button>
      <p className='cardNum'>{cardIndex + 1} of {CARDS.length}</p>
      <ValentineViewer
        CurrentCard={CARDS[cardIndex]}
      />
    </div>
  )
}

export default App
