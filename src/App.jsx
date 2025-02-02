
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

export const ThemeContext = createContext();

const deckOfCards = createDeck(4)
// for some reason, if I put this inside the App function or invoke it directly in the useState for deck, then I get an unexplainable bug: Upon a click of Theme or Deck buttons, App re-renders with a new value of Deck and createDeck is called again. Even though nowhere it seems that the deck state should change ie setDeck only shifts the array one along. However even stranger is that the next click of Theme or Deck keeps the new deck array as is and does not change it! I have spent about an hour on this and cannot see the solution, so I have kept deckOfCards outside.

function App() {

  // const deckOfCards = createDeck()

  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState('light');

  const [deck, setDeck] = useState(deckOfCards);
  
  const [currentCard, setCurrentCard] = useState({})

  const [orders, setOrders] = useState([])

  const [isDeckDisabled, setIsDeckDisabled] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);

  const [message, setMessage] = useState('Ring Bell')

  const [isComputerTurn, setIsComputerTurn] = useState(false)

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div>
          <PlayerCards playerCards={deckOfCards.playerCards} isGameOver={isGameOver}></PlayerCards>
        </div>
      <Board />
      <Card currentCard={currentCard} setCurrentCard={setCurrentCard} setOrders={setOrders} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isGameOver={isGameOver} deck={deck} setDeck={setDeck} setIsComputerTurn={setIsComputerTurn} isComputerTurn={isComputerTurn}/>
      <Deck deck={deck} setDeck={setDeck} setCurrentCard={setCurrentCard} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isComputerTurn={isComputerTurn}/>
      <Bell isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} setIsGameOver={setIsGameOver} isGameOver={isGameOver} playerCards={deckOfCards.playerCards} orders={orders} message={message} setMessage={setMessage}/>
      <Cardz orders={orders} />
      </ThemeContext.Provider>
    </>
  )
}

export default App
