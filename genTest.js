function fromTo(num1, num2) {
    let count = 0;
    const b = num2 - num1 + 1
    function counterFunc() {
      count++;
      return count < b ? num1 + count - 1: undefined;
    }
    return counterFunc;
  }

const index = fromTo(0, 3);
// console.log(index()); // 0
// index(); // 1
// console.log(index()); // 2
// console.log(index()); // undefined
  

let deck = ['a', 'b', 'c', 'd', 'e', 'f']

function drawFromDeck() {

    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(deck[index()])
        }, 5000*i)
    }
}

console.log(drawFromDeck())