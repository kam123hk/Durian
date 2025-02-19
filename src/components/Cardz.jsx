// import DoubleBanana from '../assets/double-banana.jpg'
// import TripleBanana from '../assets/triple-banana.jpg'
// import SingleBanana from '../assets/single-banana.jpg'
// import SingleDurian from '../assets/single-durian.jpg'
// import DoubleDurian from '../assets/double-durian.jpg'
// import TripleDurian from '../assets/triple-durian.jpg'
import Blank from '../assets/blank.png'

function Cardz({orders, SingleRasp, DoubleRasp, TripleRasp, SingleStraw, DoubleStraw, TripleStraw, SingleBanana, DoubleBanana, TripleBanana, SingleDurian, DoubleDurian, TripleDurian}) {

    function cardHelper(card) {
        let fruitPic;
        let secondPic;

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
                <img className="img-left" src={card.inOrder ? fruitPic : secondPic}/>
                <img className="img-right" src={card.inOrder ? secondPic : fruitPic}/>
            </label>
        )
    }

    return (
        orders.map((order, i) => {
            return <li key={i}>{cardHelper(order)}</li>
        })
    )
}

export default Cardz;