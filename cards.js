// class Card {
//     constructor() {
//         // this.inDeck = true;
//         // this.inOrder = false;
//         // this.orientation = true;
//         const fruits = ['raspberry', 'strawberry', 'durian', 'banana'];
//         const randomIndexLeft = Math.floor(Math.random()*4);
//         const leftCard = {};
//         leftCard[fruits[randomIndexLeft]] = 1;
//         fruits.splice(randomIndexLeft, 1)
//         const randomIndexRight = Math.floor(Math.random()*3);
//         const rightCard = {};
//         const randomRightNumber = Math.floor(Math.random()*2) + 2;
//         rightCard[fruits[randomIndexRight]] = randomRightNumber;
//         this.card = [leftCard, rightCard];
//     }
//     swap() {
//         this.card.reverse()
//     }
// }

class Card {
    constructor() {
        // this.inDeck = true;
        this.inOrder = false;
        // this.orientation = true;
        const fruits = ['raspberry', 'strawberry', 'durian', 'banana'];
        const randomIndexLeft = Math.floor(Math.random()*4);
        const leftCard = fruits[randomIndexLeft];
        fruits.splice(randomIndexLeft, 1)
        const randomIndexRight = Math.floor(Math.random()*3);
        const rightCard = fruits[randomIndexRight];
        const randomRightNumber = Math.floor(Math.random()*2) + 2;
        // rightCard[fruits[randomIndexRight]] = randomRightNumber;
        this.card = {'raspberry': 0, 'strawberry': 0, 'durian': 0, 'banana': 0};
        this.card[leftCard] += 1;
        this.card[rightCard] += randomRightNumber;
    }
    swap() {
        // this.card.reverse()
        this.inOrder = !this.inOrder;
    }
}

export default Card;

// const card1 = new Card([1, 'durian'], [2, 'strawberry'])
const card1 = new Card()


// card1.swap();
// console.log(card1, 'after swapped')
// card1.swap();
// console.log(card1, 'should be back to original')


const createCards = (numberOfPlayers) => {
    const cards = [];
    for (let i = 0; i < 36 - numberOfPlayers; i++) {
        cards.push(new Card());
    }
    return cards;
}

// const cards = createCards()
// const actualCards = cards.map(cardObj => cardObj.card)

// console.log(actualCards)

class Board {
    constructor(numberOfPlayers) {
        this.deck = createCards(numberOfPlayers);
        this.playerCard = {};
        this.orders = [];
        this.unOrders = [];
        this.playerCards = createCards(36 - numberOfPlayers)
    }
    //get,
}

// const newBoard = new Board()
// console.log(newBoard.deck.map(cardObj => cardObj.card))

export const createDeck = (numberOfPlayers) => {
    console.log('createDeck called');
    const newBoard = new Board(numberOfPlayers)
    // return newBoard.deck.map(cardObj => cardObj.card)
    return newBoard
}