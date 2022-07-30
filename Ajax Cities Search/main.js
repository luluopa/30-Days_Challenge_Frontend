const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const PAGE = 10

async function fecthData() {
    const xmlHttp = new XMLHttpRequest()
    await xmlHttp.open("GET", ENDPOINT, false)
    xmlHttp.send(null)

    return xmlHttp.responseText
}

async function treatingData() {
    const data = await fecthData()
    return JSON.parse(data)
}

function getMatchedStringUntouched(str, substr) {
    return str.slice(str.toLowerCase().indexOf(substr), str.toLowerCase().indexOf(substr) + substr.length)
}

function cleanList() {
    document.querySelector(".list-ul").innerHTML = ""
}

function constructCities(data, targetText) {
    data.forEach((city) => {
        const regex = RegExp(targetText, 'gi')
        const cityName = city.city.replace(regex, `<span class="targets">${getMatchedStringUntouched(city.city, targetText)}</span>`)
        const li = new DOMParser().parseFromString(`<li class="names"><span class="name">${cityName}</span> <span class="pop">${city.population}</span></li>`, "text/xml")

        document.querySelector(".list-ul").appendChild(li.documentElement)
    })
}

function findItens(e, data) {
    if(e.target.value !== "") {
        const cities = data.filter((cities) => {
            //using regex to figure out which city to filter
            const regex = RegExp(e.target.value, 'gi')
            return cities.city.toLowerCase().match(regex)
        })
    
        constructCities(cities, e.target.value)
    }
}

async function main() {
    const treatedData = await treatingData()
    
    document.querySelector("#input-search").addEventListener("input", (e) => {
        cleanList()
        findItens(e, treatedData)
    })
}   

main()