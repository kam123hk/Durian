
import Board from './Board'
import '../App.css'
import {useState, useEffect } from 'react';
import Card from './Card'
import Deck from './Deck';
import { createDeck } from '../../cards';
import Cardz from './Cardz'
import PlayerCards from './PlayerCards';
import Bell from './Bell';

import DoubleRasp2 from '../assets/double-raspberry.jpg'
import TripleRasp2 from '../assets/triple-raspberry.jpg'
import SingleRasp2 from '../assets/single-raspberry.jpg'
import SingleStraw2 from '../assets/single-strawberry.jpg'
import DoubleStraw2 from '../assets/double-strawberry.jpg'
import TripleStraw2 from '../assets/triple-strawberry.jpg'
import SingleRose from '../assets/single-rose.jpg';
import DoubleRose from '../assets/double-rose.jpg';
import TripleRose from '../assets/triple-rose.png';
import SingleHeart from '../assets/single-heart.jpg';
import DoubleHeart from '../assets/double-heart.jpg';
import TripleHeart from '../assets/triple-heart.jpg';

import DoubleBanana2 from '../assets/double-banana.jpg'
import TripleBanana2 from '../assets/triple-banana.jpg'
import SingleBanana2 from '../assets/single-banana.jpg'
import SingleDurian2 from '../assets/single-durian.jpg'
import DoubleDurian2 from '../assets/double-durian.jpg'
import TripleDurian2 from '../assets/triple-durian.jpg'

import SingleBalloon from '../assets/single-balloon.jpg'
import DoubleBalloon from '../assets/double-balloon.jpg'
import TripleBalloon from '../assets/triple-balloon.jpg'
import SingleCandle from '../assets/single-candle.png'
import DoubleCandle from '../assets/double-candle.jpg'
import TripleCandle from '../assets/triple-candle.jpg'

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

  const [SingleRasp, setSingleRasp] = useState(SingleRasp2);
  const [DoubleRasp, setDoubleRasp] = useState(DoubleRasp2);
  const [TripleRasp, setTripleRasp] = useState(TripleRasp2);
  const [SingleStraw, setSingleStraw] = useState(SingleStraw2);
  const [DoubleStraw, setDoubleStraw] = useState(DoubleStraw2);
  const [TripleStraw, setTripleStraw] = useState(TripleStraw2);

  const [birthday, setBirthday] = useState(false)

  const [SingleBanana, setSingleBanana] = useState(SingleBanana2);
  const [DoubleBanana, setDoubleBanana] = useState(DoubleBanana2);
  const [TripleBanana, setTripleBanana] = useState(TripleBanana2);
  const [SingleDurian, setSingleDurian] = useState(SingleDurian2);
  const [DoubleDurian, setDoubleDurian] = useState(DoubleDurian2);
  const [TripleDurian, setTripleDurian] = useState(TripleDurian2);

  useEffect(() => {
    setSingleBanana(birthday ? SingleCandle : SingleBanana2)
    setDoubleBanana(birthday ? DoubleCandle : DoubleBanana2)
    setTripleBanana(birthday ? TripleCandle : TripleBanana2)
    setSingleDurian(birthday ? SingleBalloon : SingleDurian2)
    setDoubleDurian(birthday ? DoubleBalloon : DoubleDurian2)
    setTripleDurian(birthday ? TripleBalloon : TripleDurian2)
}, [birthday]);      


  useEffect(() => {
    setSingleRasp(theme === 'dark' ? SingleRose : SingleRasp2)
    setDoubleRasp(theme === 'dark' ? DoubleRose : DoubleRasp2)
    setTripleRasp(theme === 'dark' ? TripleRose : TripleRasp2)
    setSingleStraw(theme === 'dark' ? SingleHeart : SingleStraw2)
    setDoubleStraw(theme === 'dark' ? DoubleHeart : DoubleStraw2)
    setTripleStraw(theme === 'dark' ? TripleHeart : TripleStraw2)
}, [theme]);

  return (
    <>
        <div>
          <PlayerCards playerCards={deck.playerCards} isGameOver={isGameOver} SingleRasp={SingleRasp} DoubleRasp={DoubleRasp} TripleRasp={TripleRasp} SingleStraw={SingleStraw} DoubleStraw={DoubleStraw} TripleStraw={TripleStraw} SingleBanana={SingleBanana} DoubleBanana={DoubleBanana} TripleBanana={TripleBanana} SingleDurian={SingleDurian} DoubleDurian={DoubleDurian} TripleDurian={TripleDurian}></PlayerCards>
        </div>
      <Board birthday={birthday} setBirthday={setBirthday}/>
      <Card currentCard={currentCard} setCurrentCard={setCurrentCard} setOrders={setOrders} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isGameOver={isGameOver} deck={deck} setDeck={setDeck} setIsComputerTurn={setIsComputerTurn} isComputerTurn={isComputerTurn} numberOfComputerPlayers={numberOfComputerPlayers} SingleRasp={SingleRasp} DoubleRasp={DoubleRasp} TripleRasp={TripleRasp} SingleStraw={SingleStraw} DoubleStraw={DoubleStraw} TripleStraw={TripleStraw} SingleBanana={SingleBanana} DoubleBanana={DoubleBanana} TripleBanana={TripleBanana} SingleDurian={SingleDurian} DoubleDurian={DoubleDurian} TripleDurian={TripleDurian}/>
      <Deck deck={deck} setDeck={setDeck} setCurrentCard={setCurrentCard} isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} isComputerTurn={isComputerTurn}/>
      <Bell isDeckDisabled={isDeckDisabled} setIsDeckDisabled={setIsDeckDisabled} setIsGameOver={setIsGameOver} isGameOver={isGameOver} playerCards={deck.playerCards} orders={orders} message={message} setMessage={setMessage} isComputerTurn={isComputerTurn}/>
      <Cardz orders={orders} SingleRasp={SingleRasp} DoubleRasp={DoubleRasp} TripleRasp={TripleRasp} SingleStraw={SingleStraw} DoubleStraw={DoubleStraw} TripleStraw={TripleStraw} SingleBanana={SingleBanana} DoubleBanana={DoubleBanana} TripleBanana={TripleBanana} SingleDurian={SingleDurian} DoubleDurian={DoubleDurian} TripleDurian={TripleDurian}/>
    </>
  )
}

export default Game
