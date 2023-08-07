let image = document.querySelector('img')
let button = document.querySelector('button')
let p = document.querySelector('p')
let obj = {
    0: '0',
    1: '1'
}

let objArr = [obj[0], obj[1]]

button.addEventListener('click', function () {
    image.src = `${window.location.origin}/coin__game/${obj[Math.floor(Math.random() * objArr.length)]}.png`

    if(image.src === `${window.location.origin}/coin__game/${obj[0]}.png`){
        image.alt = 'orel'
        p.textContent = image.alt
    }
    if(image.src === `${window.location.origin}/coin__game/${obj[1]}.png`){
        image.alt = 'reshka'
        p.textContent = image.alt
    }

})

p.textContent = image.alt