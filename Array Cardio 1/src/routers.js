const express = require('express')

//controllers
const filteredController = require('./controller').filterController
const nameController = require('./controller').firstLastNameController
const ageController = require("./controller").sortController
const reducedController = require("./controller").reduceController
const livedController = require('./controller').sortLivedYearsController
const sortedPeopleController = require('./controller').peopleSortController
const sumUpCarsController = require('./controller').sumUpController

//setting up the router
const router = express.Router()

router.get('/', (request, response) => {
    return response.status(200).send(JSON.stringify({"Hello World!":"Working"}))
})

router.get('/inventors_filter_1500/', async (request, response) => {
    return filteredController(request, response)
})

router.get('/name/', async (request, response) => {
    return nameController(request, response)
})

router.get('/sort/age/', async (request, response) => {
    return ageController(request, response)
})

router.get('/reduce/', async (request, response) => {
    return reducedController(request, response)
})

router.get('/lived/', async (request, response) => {
    return livedController(request, response)
})

router.get('/people/', async (request, response) => {
    return sortedPeopleController(request, response)
})

router.get('/cars/', async (request, response) => {
    return sumUpCarsController(request, response)
})

module.exports = {
    router
}