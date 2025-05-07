const btn = document.getElementById('btn')
const para = document.getElementById('paragraph')
function updateButton() {
    if (btn.textContent === 'Start machine') {
        para.textContent = 'The machine is stopped.'
        btn.textContent = 'Stop machine'
    } else {
       para.textContent = 'The machine is started.'
        btn.textContent = 'Start machine'
    }
}
btn.addEventListener('click',updateButton)