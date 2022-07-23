//pegar a data atual
//atualizar a animação com base na transição da animação

const SECOND = document.querySelector(".sec")
const MIN = document.querySelector(".min")
const HOUR = document.querySelector(".hour")

// document.getElementsByClassName("clock")[0].classList.add("rotate90deg")
localStorage.setItem("isZero", false)

function checkAngleZero(secondAngle, minuteAngle, hourAngle) {
    return (secondAngle == 0 || minuteAngle == 0 || hourAngle == 0)
}

function animationRotate() {
    let date = new Date()

    let seconds = date.getSeconds()
    let minute = date.getMinutes()
    let hour = date.getHours()

    let secondAngle = (360 / 60) * seconds
    let minuteAngle = (360 / 60) * minute
    let hourAngle = (360 / 12) * hour

    if(checkAngleZero(secondAngle, minuteAngle, hourAngle)) {
        localStorage.setItem("isZero", true)
    }
    else {
        localStorage.setItem("isZero", false)
        for(tip of document.getElementsByClassName("tip")) {
            tip.classList.remove("tip-negate-transition")
        }
    }

    // SECOND.css({
    //     'transform': 'rotate(' + secondAngle + 'deg)'
    // })

    SECOND.style['transform'] = `rotate(${secondAngle}deg)`
    MIN.style['transform'] = `rotate(${minuteAngle}deg)`
    HOUR.style['transform'] = `rotate(${hourAngle}deg)`

    if(localStorage.getItem("isZero") !== "false") {
        console.log(localStorage.getItem("isZero"))
        for(tip of document.getElementsByClassName("tip")) {
            tip.classList.add("tip-negate-transition")
        }
    }
}

setInterval(animationRotate, 1000);