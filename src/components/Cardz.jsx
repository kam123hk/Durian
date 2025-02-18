import DoubleBanana from '../assets/double-banana.jpg'
import TripleBanana from '../assets/triple-banana.jpg'
import SingleBanana from '../assets/single-banana.jpg'
import DoubleRasp2 from '../assets/double-raspberry.jpg'
import TripleRasp2 from '../assets/triple-raspberry.jpg'
import SingleRasp2 from '../assets/single-raspberry.jpg'
import SingleStraw2 from '../assets/single-strawberry.jpg'
import DoubleStraw2 from '../assets/double-strawberry.jpg'
import TripleStraw2 from '../assets/triple-strawberry.jpg'
import SingleDurian from '../assets/single-durian.jpg'
import DoubleDurian from '../assets/double-durian.jpg'
import TripleDurian from '../assets/triple-durian.jpg'
import Blank from '../assets/blank.png'

import SingleRose from '../assets/single-rose.jpg';
import DoubleRose from '../assets/double-rose.jpg';
import TripleRose from '../assets/triple-rose.png';
import SingleHeart from '../assets/single-heart.jpg';
import DoubleHeart from '../assets/double-heart.jpg';
import TripleHeart from '../assets/triple-heart.jpg';

import { useEffect, useState } from 'react'


function Cardz({orders, theme}) {

    const [SingleRasp, setSingleRasp] = useState(SingleRasp2);
    const [DoubleRasp, setDoubleRasp] = useState(DoubleRasp2);
    const [TripleRasp, setTripleRasp] = useState(TripleRasp2);
    const [SingleStraw, setSingleStraw] = useState(SingleStraw2);
    const [DoubleStraw, setDoubleStraw] = useState(DoubleStraw2);
    const [TripleStraw, setTripleStraw] = useState(TripleStraw2);
    

    useEffect(() => {
            setSingleRasp(theme === 'dark' ? SingleRose : SingleRasp2)
            setDoubleRasp(theme === 'dark' ? DoubleRose : DoubleRasp2)
            setTripleRasp(theme === 'dark' ? TripleRose : TripleRasp2)
            setSingleStraw(theme === 'dark' ? SingleHeart : SingleStraw2)
            setDoubleStraw(theme === 'dark' ? DoubleHeart : DoubleStraw2)
            setTripleStraw(theme === 'dark' ? TripleHeart : TripleStraw2)
        }, [theme]);

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