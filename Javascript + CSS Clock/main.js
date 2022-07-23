//pegar a data atual
//atualizar a animação com base na transição da animação

const SECOND = document.querySelector(".sec")
const MIN = document.querySelector(".min")
const HOUR = document.querySelector(".hour")

// document.getElementsByClassName("clock")[0].classList.add("rotate90deg")

function animationRotate() {
    let date = new Date()

    let seconds = date.getSeconds()
    let minute = date.getMinutes()
    let hour = date.getHours()

    let secondAngle = (360 / 60) * seconds
    let minuteAngle = (360 / 60) * minute
    let hourAngle = (360 / 12) * hour

    // SECOND.css({
    //     'transform': 'rotate(' + secondAngle + 'deg)'
    // })

    SECOND.style['transform'] = `rotate(${secondAngle}deg)`
    MIN.style['transform'] = `rotate(${minuteAngle}deg)`
    HOUR.style['transform'] = `rotate(${hourAngle}deg)`
}

setInterval(animationRotate, 1000);