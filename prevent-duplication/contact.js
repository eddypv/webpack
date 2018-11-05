import './estilos.css'
import {firstMessage} from './message.js'
import platziImg from './log.png'
import React, {Component} from 'react';
import {render} from 'react-dom'
import Teachers from './components/teachers.js'
import data from './teachers.json'
import './main.less'


render(<Teachers  data= {data}/>, document.getElementById('container'))
document.write(firstMessage)
const img = document.createElement('img')
img.setAttribute('src', platziImg)
document.body.append(img)

console.log('Con estilos css')