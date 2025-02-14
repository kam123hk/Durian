
import Board from './Board'
import '../App.css'
import {useState, useEffect } from 'react';
import Card from './Card'
import Deck from './Deck';
import { createDeck } from '../../cards';
import Cardz from './Cardz'
import PlayerCards from './PlayerCards';
import Bell from './Bell';

// const deckOfCards = createDeck(4)
// for some reason, if I put this inside the App function or invoke it directly in the useState for deck, then I get an unexplainable bug: Upon a click of Theme or Deck buttons, App re-renders with a new value of Deck and createDeck is called again. Even though nowhere it seems that the deck state should change ie setDeck only shifts the array one along. However even stranger is that the next click of Theme or Deck keeps the new deck array as is and does not change it! I have spent about an hour on this and cannot see the solution, so I have kept deckOfCards outside.

function Game({numberOfComputerPlayers, theme}) {

  // const deckOfCards = createDeck()

  // useEffect for deck instead?

  // const [deck, setDeck] = useState(deckOfCards);
  const [deck, setDeck] = useState(() => createDeck(numberOfComputerPlayers + 1)) // lazy initialisation seems to work fine
  
  const [currentCard, setCurrentCard] = useState({})

  const [orders, setOrders] = useState([])

  const [isDeckDisabled, setIsDeckDisabled] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);

  const [message, setMessage] = useState('Ring Bell')

  const [isComputerTurn, setIsComputerTurn] = useState(false)

  const [DoubleStraw, setDoubleStraw] = useState(null);

  return (
    <>
        <div>
          <PlayerCards playerCards={deck.playerCards} isGameOver={isGameOver}></PlayerCards>
        </div>
      <Board />
      <Card currentCard={currentCard} setCurrentCard={setCurrentCard} setOrders={setOrders} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isGameOver={isGameOver} deck={deck} setDeck={setDeck} setIsComputerTurn={setIsComputerTurn} isComputerTurn={isComputerTurn} numberOfComputerPlayers={numberOfComputerPlayers}/>
      <Deck deck={deck} setDeck={setDeck} setCurrentCard={setCurrentCard} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isComputerTurn={isComputerTurn}/>
      <Bell isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} setIsGameOver={setIsGameOver} isGameOver={isGameOver} playerCards={deck.playerCards} orders={orders} message={message} setMessage={setMessage} isComputerTurn={isComputerTurn}/>
      <Cardz orders={orders} theme={theme} DoubleStraw={DoubleStraw} setDoubleStraw={setDoubleStraw}/>
    </>
  )
}

export default Game
