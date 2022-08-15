import { initiateHomepage } from './pages/index.js'

fetch("../data/photographers.json").then(response => {
    response.json()
}).then(data => {
    console.log(data)
})