import { useEffect } from "react";

function Bell({isDeckDisabled, setIsDeckDisabled, isGameOver, setIsGameOver, orders, playerCards, message, setMessage, isComputerTurn}) {

    // let message = 'Ring Bell';

    const tallyOrders = {'raspberry':0, 'strawberry':0, 'durian':0, 'banana':0}
    const tallyPlayers = {'raspberry':0, 'strawberry':0, 'durian':0, 'banana':0}

    orders.forEach(order => {
        let fruit;
        if (order.inOrder) {
            fruit = Object.keys(order.card).find(element => order.card[element] > 1)
            tallyOrders[fruit] += order.card[fruit]
        } else {
            fruit = Object.keys(order.card).find(element => order.card[element] === 1)
            tallyOrders[fruit] += order.card[fruit]
        }
    })

    playerCards.forEach(playerCard => {
        tallyPlayers.raspberry += playerCard.card.raspberry;
        tallyPlayers.strawberry += playerCard.card.strawberry
        tallyPlayers.durian += playerCard.card.durian
        tallyPlayers.banana += playerCard.card.banana
    })

    useEffect(() => {
        if (isGameOver && Object.values(tallyOrders).every((element, i) => element <= Object.values(tallyPlayers)[i])) {
            console.log('win')
            setTimeout(() => {
                setMessage('You lose')
            }, 1000)            
        } else if (isGameOver && !Object.values(tallyOrders).every((element, i) => element <= Object.values(tallyPlayers)[i])) {
            console.log('lose')
            setTimeout(() => {
                setMessage('You win')
            }, 1000)       
        }
    }, [isGameOver])



    return <button disabled={isComputerTurn || isDeckDisabled} onClick={() => {
        setIsDeckDisabled(boolean => !boolean)
        setIsGameOver(boolean => !boolean)
    }}>{message}</ button>
}

export default Bell