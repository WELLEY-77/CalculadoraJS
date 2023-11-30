const main = document.querySelector('main')
const root = document.querySelector('root')
const input = document.getElementById('input')
const inputResult = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Apagar os numeros do input

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

// Eventos de quando for clicado os numeros da tela
document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

// Eventos de quando aperta na tecla

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)


function calculate() {
    const result = eval(input.value)
    inputResult.value = result
}




