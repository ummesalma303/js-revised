console.log('hello..........')
function updateName() {
    const name = prompt('Enter a new name');
    const b = btn.textContent=`Player 1: ${name}`
    // console.log(b)
}
const btn = document.querySelector('.button')
btn.addEventListener("click", updateName)


