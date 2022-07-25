
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const DATA = require('./data/data')

const CARS = DATA.CARS
const INVENTORS = DATA.INVENTORS
const PEOPLE = DATA.PEOPLE

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filterController = async (request, response) => {
    try {
        const filtered_inventors = await INVENTORS.filter((inventor) => {return inventor.year > 1500 && inventor.year < 1600})
        return response.status(200).json(filtered_inventors)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const firstLastNameController = async (request, response) => {
    try {
        const inventors_firstLastName = await INVENTORS.map((inventor) => {return `${inventor.first} ${inventor.last}`})
        return response.status(200).json(inventors_firstLastName)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortController = async (request, response) => {
    try {
        const sortedInventors = await INVENTORS.sort((inventor1, inventor2) => {return (inventor1.year - inventor2.year)})
        return response.status(200).json(sortedInventors)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const reduceController = async (request, response) => {
    try {
        const reducedInventors = await INVENTORS.reduce((total, inventor) => {return total + (inventor.passed - inventor.year)}, 0)
        console.log(reducedInventors)
        return response.status(200).json(reducedInventors)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// 5. Sort the inventors by years lived

const sortLivedYearsController = async (request, response) => {
    try {
        const sortedInventors = await INVENTORS.sort((inventor1, inventor2) => {
            const inventor1_lived = inventor1.passed - inventor1.year
            const inventor2_lived = inventor2.passed - inventor2.year
            return inventor1_lived < inventor2_lived ? 1 : -1
        })
        return response.status(200).json(sortedInventors)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

function compareNames(nameOne, nameTwo) {
    return nameOne[0] < nameTwo[0] ? -1 : 1
}

const peopleSortController = async (request, response) => {
    try {
        const sortedPeople = await PEOPLE.sort((previous_person, next_person) => {
            const previous_complete_name_array = previous_person.split(', ')
            const next_complete_name_array = next_person.split(', ')

            //assuming all names are in this format Name_case
            return previous_person[0] !== next_person[0] ? 
            compareNames(previous_person, next_person) : 
            compareNames(previous_complete_name_array[1], next_complete_name_array[1])
            
        })
        return response.status(200).json(sortedPeople)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}

// 8. Reduce Exercise
// Sum up the instances of each cars

const sumUpController = async (request, response) => {
    try {
        // const countedCars = await sumUpCars(CARS)
        const countedCars = await CARS.reduce((obj, car) => {
            if(!obj[car]){obj[car] = 0}
            obj[car]++
            return obj
        }, {})
        return response.status(200).json(countedCars)
    }
    catch(error) {
        return response.status(500).json(error)
    }
}


module.exports = {
    filterController, firstLastNameController, sortController, reduceController, sortLivedYearsController, peopleSortController, sumUpController
}

