function checkGuess() {
    alert("I am a placeholder");
  }
  const sub = document.querySelector('.guessSubmit')
  sub.addEventListener('click',checkGuess)

  const button = document.getElementById('button_A')
  const heading = document.querySelector('#heading_A')

  let count = 1
  button.onclick = () =>{
    button.textContent = 'try again'
    heading.textContent = `your score: ${count++}`
  }