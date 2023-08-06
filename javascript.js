const input = document.getElementById('input')
const button = document.getElementById('button')
const output = document.getElementById('output')

output.innerHTML = "Input a number!"

function fizzBuzz () {
    output.innerHTML = ""
    for (let i = 1; i < input.value; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            output.innerHTML += '- FizzBuzz! <br>'
        } else if (i % 3 === 0) {
            output.innerHTML += '- Fizz <br>'
        } else if (i % 5 === 0) {
            output.innerHTML += '- Buzz <br>'
        }  else {
            output.innerHTML += `- ${i} <br>`
        }
    }
}

button.addEventListener('click', fizzBuzz)