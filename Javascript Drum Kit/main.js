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

function setDataKey(element, key){
    {key ? element.dataset.key = key : null}
    return element
}

function createElementWithClass(name, className){
    let element = document.createElement(name)
    {className ? element.className = className : null}

    return element
}

function createAudio(name, className, key, url){
    let audio = createElementWithClass(name)
    audio.dataset.key = key
    audio.src = url

    return audio
}

async function animationKbdHit(key){
    let blockDiv_audio = document.querySelector(`div[data-key="${key}"]`)

    blockDiv_audio.classList.add('key_animation')
    await setTimeout(() => {
        blockDiv_audio.classList.remove('key_animation')
    }, 100)
}

function main(){
    AUDIO_DATA_URL.forEach((obj_audio) => {
        let blockDiv_audio = createElementWithClass('div', 'key')
        blockDiv_audio = setDataKey(blockDiv_audio, obj_audio.key)

        let kbd = createElementWithClass('kbd')
        let span = createElementWithClass('span')
        
        span.innerText = obj_audio.name
        kbd.innerText = String.fromCharCode(obj_audio.key)

        blockDiv_audio.appendChild(kbd)
        blockDiv_audio.appendChild(span)

        let audio = createAudio('audio', 'key', obj_audio.key, obj_audio.url)

        blockDiv_audio.addEventListener('click', (event) => {
            animationKbdHit(event.target.dataset.key)
            document.querySelector(`audio[data-key="${event.target.dataset.key}"]`).play()
        })

        CONTAINER_DIV.appendChild(blockDiv_audio)
        AUDIO_DIV.appendChild(audio)
    })

    //If the user hits de button
    document.addEventListener('keydown', (event) => {
        animationKbdHit(event.keyCode)
        document.querySelector(`audio[data-key="${event.keyCode}"]`).play()
    })
}

main()
