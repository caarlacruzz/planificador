import { formatearFecha, calcularPrioridad } from './utils.js'
import './style.css'
import.meta.env.Vite_version
import confetti from 'canvas-confetti'

const boton = document.getElementById('ua')
const input = document.getElementById('texto')
const lista = document.getElementById('lista')
const tiempoInput = document.getElementById('tiempo')
boton.addEventListener('click', (e) => guardarPlan(e))

function guardarPlan(e) {
  e.preventDefault()
  const minutos = parseInt(tiempoInput.value)
  const prioridad = calcularPrioridad(minutos)
  const fecha = formatearFecha(new Date())
  const li = document.createElement('li')
  li.textContent = input.value + '-' + fecha + ' - Prioridad: ' + prioridad
  lista.appendChild(li)
  confetti()
  input.value = ''
  tiempoInput.value = ''
}

// hacer una caja al lado de donde se escribe la tarea donde pongamos cuanto tiempo tarda en hacerla y clasificarlas si es menos de 10 min baja si es menos de 30 min media y si es mas de 30 min alta y que se vea en la lista de tareas el color de la prioridad
