
import Board from './components/Board'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext, useState, useEffect } from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import { createDeck } from '../cards';
// import Orders from './components/Orders';
import Cardz from './components/Cardz'
import PlayerCards from './components/PlayerCards';
import Bell from './components/Bell';
import PlayerCount from './components/PlayerCount';
import Game from './components/Game'

export const ThemeContext = createContext();

// const deckOfCards = createDeck(4)
// for some reason, if I put this inside the App function or invoke it directly in the useState for deck, then I get an unexplainable bug: Upon a click of Theme or Deck buttons, App re-renders with a new value of Deck and createDeck is called again. Even though nowhere it seems that the deck state should change ie setDeck only shifts the array one along. However even stranger is that the next click of Theme or Deck keeps the new deck array as is and does not change it! I have spent about an hour on this and cannot see the solution, so I have kept deckOfCards outside.

function App() {

  // const deckOfCards = createDeck()

  // useEffect for deck instead?

  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState('light');

  const [gameStarted, setGameStarted] = useState(false)

  const [numberOfComputerPlayers, setNumberOfComputerPlayers] = useState(0)

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // deckOfCards -> deck

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {!gameStarted &&<PlayerCount setGameStarted={setGameStarted} setNumberOfComputerPlayers={setNumberOfComputerPlayers}/>}
        {gameStarted && <Game numberOfComputerPlayers={numberOfComputerPlayers} theme={theme}/>}
      </ThemeContext.Provider>
    </>
  )
}

export default App
