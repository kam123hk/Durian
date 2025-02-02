import Cardz from './Card';
import { useState } from 'react';
// import { createDeck } from '../../cards';

function Deck({deck, setDeck, setCurrentCard, isDeckDisabled, setIsDeckDisabled, isComputerTurn}) {

    let deckSize = deck.deck.length

    console.log(deck, 'should be current dec334e545k')

    function drawCard() {
        
        setCurrentCard(deck.deck[0])
        let newDeck = {...deck}
        newDeck.deck = newDeck.deck.slice(1)
        setDeck(newDeck)
    }

    return <button disabled={isDeckDisabled} onClick={
        () => {
            setIsDeckDisabled(boolean => {
                return !boolean
            })
            // setIsComputerTurn(boolean => !boolean)
            // return isComputerTurn ? console.log(isComputerTurn, 'compturn?') : drawCard()
            drawCard()
        }
    }>{deckSize} CARDS LEFT</button>
}

export default Deck;