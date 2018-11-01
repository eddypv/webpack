import './estilos.css'
import {firstMessage} from './message.js'
import platziImg from './log.png'
import videoPlatzi from './videos/que-es-core.mp4'

document.write(firstMessage)
const video = document.createElement('video')
video.setAttribute('src', videoPlatzi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
const img = document.createElement('img')
img.setAttribute('src', platziImg)
document.body.append(img)
document.body.append(video)

console.log('Con estilos css')