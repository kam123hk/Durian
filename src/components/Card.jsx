import DoubleBanana from '../assets/double-banana.jpg'
import TripleBanana from '../assets/triple-banana.jpg'
import SingleBanana from '../assets/single-banana.jpg'
import DoubleRasp from '../assets/double-raspberry.jpg'
import TripleRasp from '../assets/triple-raspberry.jpg'
import SingleRasp from '../assets/single-raspberry.jpg'
import SingleStraw from '../assets/single-strawberry.jpg'
import DoubleStraw from '../assets/double-strawberry.jpg'
import TripleStraw from '../assets/triple-strawberry.jpg'
import SingleDurian from '../assets/single-durian.jpg'
import DoubleDurian from '../assets/double-durian.jpg'
import TripleDurian from '../assets/triple-durian.jpg'
import Blank from '../assets/blank.png'
import newCard2 from '../../cards.js'


function Card({currentCard, setCurrentCard, setOrders, isDeckDisabled, setIsDeckDisabled, isGameOver, deck, setDeck, setIsComputerTurn, isComputerTurn, numberOfComputerPlayers}) {
console.log(currentCard, 'cuurrrr card in card jsx)')

    let fruitPic;
    let secondPic;

    if (Object.keys(currentCard).length === 0) {
        fruitPic = Blank;
        secondPic = Blank
        return (
            <label className="card">
                <img className="img-left" src={fruitPic}/>
                <img className="img-right" src={secondPic}/>
            </label>
        )
    }

    const singleFruit = Object.keys(currentCard.card).find(element => currentCard.card[element] === 1)
    const otherFruit = Object.keys(currentCard.card).find(element => currentCard.card[element] > 1)

    if (singleFruit === "banana") {
        fruitPic = SingleBanana
    } else if (singleFruit === "raspberry") {
        fruitPic = SingleRasp
    } else if (singleFruit === "strawberry") {
        fruitPic = SingleStraw
    } else if (singleFruit === "durian") {
        fruitPic = SingleDurian
    } else {
        fruitPic = Blank
    }

    if (otherFruit === 'banana') {
        secondPic = currentCard.card[otherFruit] > 2 ? TripleBanana : DoubleBanana
    } else if (otherFruit === 'raspberry') {
        secondPic = currentCard.card[otherFruit] > 2 ? TripleRasp : DoubleRasp
    } else if (otherFruit === 'strawberry') {
        secondPic = currentCard.card[otherFruit] > 2 ? TripleStraw : DoubleStraw
    } else if (otherFruit === 'durian') {
        secondPic = currentCard.card[otherFruit] > 2 ? TripleDurian : DoubleDurian
    } else {
        secondPic = Blank
    }
    console.log(deck, 'ahould be deck 31 in card jsx')
    console.log('stttoooo')

    function fromTo(num1, num2) {
        let count = 0;
        const b = num2 - num1 + 1
        function counterFunc() {
          count++;
          return count < b ? num1 + count - 1: undefined;
        }
        return counterFunc;
      }
    
    const index = fromTo(0, numberOfComputerPlayers);

    function drawFromDeck() {

        for (let i = 0; i < numberOfComputerPlayers; i++) {
            let number = index();
            setIsComputerTurn(true)
            setTimeout(() => {
                setCurrentCard(deck.deck[number])
                setOrders(orders => {
                    let newOrders = [...orders]
                    console.log(newOrders, 'neww orderss')
                    newOrders.push(deck.deck[number])
                    return newOrders
                })
                let newDeck = { ...deck, deck: [...deck.deck.slice(number + 1)] } // instead of {...deck} may need to make new instance of Board when time comes
                console.log(newDeck, 'newdeck in drawcard')
                // setCurrentCard(newDeck.deck[0])
                
                console.log(newDeck.deck[0], 'curr card shoulf be')
                // console.log(deck, 'deck in draw')
                // let newDeck = {...deck}
                // newDeck.deck = newDeck.deck.slice(1)
                setDeck(newDeck)
                if (i === numberOfComputerPlayers-1) setIsComputerTurn(false)
            }, 3000*(i+1))
        }
    }

    

    function drawCard() {
        setCurrentCard(deck.deck[0])
        setOrders(orders => {
            let newOrders = [...orders]
            console.log(newOrders, 'neww orderss')
            newOrders.push(deck.deck[0])
            return newOrders
        })
        let newDeck = { ...deck, deck: [...deck.deck.slice(1)] } // instead of {...deck} may need to make new instance of Board when time comes
        console.log(newDeck, 'newdeck in drawcard')
        // setCurrentCard(newDeck.deck[0])
        
        console.log(newDeck.deck[0], 'curr card shoulf be')
        // console.log(deck, 'deck in draw')
        // let newDeck = {...deck}
        // newDeck.deck = newDeck.deck.slice(1)
        setDeck(newDeck)
        // setDeck(prevDeck => {
            // console.log(prevDeck, '<-prevdeck')
            // const updatedDeck = {...prevDeck, deck: prevDeck.deck.slice(1)}
            // setCurrentCard(updatedDeck.deck[0])
            // return newDeck
            // console.log(updatedDeck, 'updated deck')
            // return updatedDeck
        // })
        
        // console.log(deck, 'deck now')
    }

    return (
        <>
        <button disabled={isGameOver || !isDeckDisabled} className="card" onClick={() => {
            setCurrentCard(card => {
                let newCard = new newCard2()
                newCard.card = {...card.card}
                newCard.inOrder = card.inOrder
                newCard.swap()
                return newCard
            })
        }}>
            <img className="img-left" src={currentCard.inOrder ? fruitPic : secondPic}/>
            <img className="img-right" src={currentCard.inOrder ? secondPic : fruitPic}/>
        </button>
        <button disabled={isGameOver || !isDeckDisabled} onClick={() => {
            setIsDeckDisabled(boolean => !boolean)
            setOrders(orders => {
                let newOrders = [...orders]
                newOrders.push(currentCard)
                console.log(deck, 'deck after click')
                return newOrders
            })
            
            // if (!isComputerTurn) {
            //     console.log(isComputerTurn, 'in cards2')
            //     drawCard();
            // }
            //     else console.log(isComputerTurn, 'in cards')
            // setTimeout(() => {
            //     drawCard()
            //     setTimeout(() => drawCard(), 5000);
            //     console.log('b4 draw --->>>')
            // }, 5000)
            // drawCard();
            drawFromDeck()
            console.log('<<--- after draw')
            // drawCard()
            // setIsComputerTurn(boolean => !boolean)
        }}>
            Press Me!
        </button>
        </>
    )
}

export default Card;