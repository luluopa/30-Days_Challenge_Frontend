const AUDIO_DATA_URL = [
    {
        name:"BOOM",
        key: 65,
        url: "./audio/boom.wav"
    },
    {
        name:"CLAP",
        key: 83,
        url: "./audio/clap.wav"
    },
    {
        name:"HIHAT",
        key: 68,
        url: "./audio/hihat.wav"
    },
    {
        name:"KICK",
        key: 70,
        url: "./audio/kick.wav"
    },
    {
        name:"OPENHAT",
        key: 71,
        url: "./audio/openhat.wav"
    },
    {
        name:"RIDE",
        key: 72,
        url: "./audio/ride.wav"
    },
    {
        name:"SNARE",
        key: 73,
        url: "./audio/snare.wav"
    },
    {
        name:"TINK",
        key: 74,
        url: "./audio/tink.wav"
    },  
    {
        name:"TOM",
        key: 75,
        url: "./audio/tom.wav"
    } 
]

const CONTAINER_DIV = document.querySelector(".container")
const AUDIO_DIV = document.querySelector(".audio-container")

function main(){
    //construir os objetos
    AUDIO_DATA_URL.forEach((obj_audio) => {
        //criando obj div
        let new_tap = document.createElement('div')
        new_tap.className = "key"
        new_tap.dataset.key = obj_audio.key
        let new_kbd = document.createElement('kbd')
        let span = document.createElement('span')
        span.innerText = obj_audio.name
        new_kbd.innerText = String.fromCharCode(obj_audio.key)

        new_tap.appendChild(new_kbd)
        new_tap.appendChild(span)

        let audio = document.createElement('audio')
        audio.dataset.key = obj_audio.key
        audio.src = obj_audio.url

        new_tap.addEventListener('click', (event) => {
            let audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`)
            audio.play()
        })

        CONTAINER_DIV.appendChild(new_tap)
        AUDIO_DIV.appendChild(audio)
    })

    //se o usuario apertar o botao
    document.addEventListener('keydown', (event) => {
        let new_tap = document.querySelector(`div[data-key="${event.keyCode}"]`)
        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

        audio.play()
    })
}

main()
