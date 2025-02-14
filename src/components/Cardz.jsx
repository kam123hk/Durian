import DoubleBanana from '../assets/double-banana.jpg'
import TripleBanana from '../assets/triple-banana.jpg'
import SingleBanana from '../assets/single-banana.jpg'
// import DoubleRasp from '../assets/double-raspberry.jpg'
// import TripleRasp from '../assets/triple-raspberry.jpg'
// import SingleRasp from '../assets/single-raspberry.jpg'
// import SingleStraw from '../assets/single-strawberry.jpg'
// import DoubleStraw from '../assets/double-strawberry.jpg'
// import TripleStraw from '../assets/triple-strawberry.jpg'
import SingleDurian from '../assets/single-durian.jpg'
import DoubleDurian from '../assets/double-durian.jpg'
import TripleDurian from '../assets/triple-durian.jpg'
import Blank from '../assets/blank.png'

import { useEffect, useState } from 'react'


function Cardz({orders, theme}) {

    const [SingleRasp, setSingleRasp] = useState(null);
    const [DoubleRasp, setDoubleRasp] = useState(null);
    const [TripleRasp, setTripleRasp] = useState(null);
    const [SingleStraw, setSingleStraw] = useState(null);
    const [DoubleStraw, setDoubleStraw] = useState(null);
    const [TripleStraw, setTripleStraw] = useState(null);
    

    useEffect(() => {
        async function loadImage() {
            const singleRaspOrRose = theme === 'dark' ? await import('../assets/single-rose.jpg') : await import('../assets/single-raspberry.jpg');
            const doubleRaspOrRose = theme === 'dark' ? await import('../assets/double-rose.jpg') : await import('../assets/double-raspberry.jpg');
            const tripleRaspOrRose = theme === 'dark' ? await import('../assets/triple-rose.png') : await import('../assets/triple-raspberry.jpg');
            const singleStrawOrHeart = theme === 'dark' ? await import('../assets/single-heart.jpg') : await import('../assets/single-strawberry.jpg');
            const doubleStrawOrHeart = theme === 'dark' ? await import('../assets/double-heart.jpg') : await import('../assets/double-strawberry.jpg');
            const tripleStrawOrHeart = theme === 'dark' ? await import('../assets/triple-heart.jpg') : await import('../assets/triple-strawberry.jpg');
            setSingleRasp(singleRaspOrRose.default)
            setDoubleRasp(doubleRaspOrRose.default)
            setTripleRasp(tripleRaspOrRose.default)
            setSingleStraw(singleStrawOrHeart.default)
            setDoubleStraw(doubleStrawOrHeart.default);
            setTripleStraw(tripleStrawOrHeart.default);
        };
    
        loadImage();
      }, [theme]); // Re-run when the theme changes

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