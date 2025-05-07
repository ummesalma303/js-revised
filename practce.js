function checkGuess() {
    alert("I am a placeholder");
  }
  const sub = document.querySelector('.guessSubmit')
  sub.addEventListener('click',checkGuess)

  
  /* -------------------------------- variable -------------------------------- */

  const button = document.getElementById('button_A')
  const heading = document.querySelector('#heading_A')

  let count = 1
  button.onclick = () =>{
    button.textContent = 'try again'
    heading.textContent = `your score: ${count++}`
  }


//   let myNumber = "74";
// myNumber += 3;
// console.log(myNumber)

// let myNumber = "74";
// myNumber = Number(myNumber) + 3;

let num2 = 50
let num1 = 10
let myNumber = num2 + num1 / 8 + 2;

console.log(myNumber)


const myInt = 5;
const myFloat = 6.667;
typeof myInt;

console.log(typeof myFloat)