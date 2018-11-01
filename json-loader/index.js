import './estilos.css'
import {firstMessage} from './message.js'
import platziImg from './log.png'
import data from './teachers.json'

console.log(data);
document.write(firstMessage)
const img = document.createElement('img')
img.setAttribute('src', platziImg)
document.body.append(img)

console.log('Con estilos css')