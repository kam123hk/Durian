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


function PlayerCards({playerCards, isGameOver}) {

    function cardHelper(card) {
        let fruitPic;
        let secondPic;

        if (!isGameOver && playerCards.indexOf(card) === 0) {
            fruitPic = Blank;
            secondPic = Blank;
            return <span>            <label className="card">
            <img className="img-left" src={fruitPic}/>
            <img className="img-right" src={secondPic}/>
        </label></span>
        }

        const singleFruit = Object.keys(card.card).find(element => card.card[element] === 1)
        const otherFruit = Object.keys(card.card).find(element => card.card[element] > 1)

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
            secondPic = card.card[otherFruit] > 2 ? TripleBanana : DoubleBanana
        } else if (otherFruit === 'raspberry') {
            secondPic = card.card[otherFruit] > 2 ? TripleRasp : DoubleRasp
        } else if (otherFruit === 'strawberry') {
            secondPic = card.card[otherFruit] > 2 ? TripleStraw : DoubleStraw
        } else if (otherFruit === 'durian') {
            secondPic = card.card[otherFruit] > 2 ? TripleDurian : DoubleDurian
        } else {
            secondPic = Blank
        }
        return (
            <label className="card">
                <img className="img-left" src={fruitPic}/>
                <img className="img-right" src={secondPic}/>
            </label>
        )
    }

    return (
        playerCards.map((card,i) => {
            return <span key={i}>{cardHelper(card)}</span>
        })
    )
}

export default PlayerCards