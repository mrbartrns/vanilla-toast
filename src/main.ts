import './style.css'
import Toast from './Toast'

const $app = document.querySelector('#app');

$app.innerHTML = `
  <div>
    <button id="toast-btn-1000">Toast 1000ms</button>
    <button id="toast-btn-2000">Toast 2000ms</button>
  </div>
`

const $toastBtn1000 = document.querySelector('#toast-btn-1000')
const $toastBtn2000 = document.querySelector('#toast-btn-2000')

$toastBtn1000.addEventListener('click', () => {
  Toast('hello, world!', 1000)
})
$toastBtn2000.addEventListener('click', () => {
  Toast('hello, world!', 2000)
})
