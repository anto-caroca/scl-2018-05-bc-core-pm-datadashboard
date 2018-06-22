
const url = 'https://api.laboratoria.la/cohorts'
let users
let cohort
const select = document.getElementById('cohortList')
const select2 = document.getElementById('userList')
let progress

function computeUsersStats (users, progress, courses) {

}

window.onload = () => {
  fetch('https://api.laboratoria.la/cohorts')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // recorrer la data
      // asignar al select las opciones
      // crear nuevo select con forma que nos da js con la data que ya sacamos
      for (let i = 0; i < data.length; i++) {
        select.options[select.options.length] = new Option(data[i].id, data[i].id)
      }
      select.addEventListener('change', (event) => {
        cohort = select.value
        return progreso(cohort)
      })
    })
}

const progreso = (cohort) => {
  fetch(`${url}/${cohort}/progress`)
    .then(res => res.json())
    .then((data2) => {
      progress = data2
      console.log(progress)
      Object.entries(data2)
    })
}
const usuarios = (user) => {
  fetch(`${url}/${cohort}/users`)
    .then(res => res.json())
    .then((data) => {
      users = data
      Object.entries(data)
      console.log(data)
    })
}
// let co = document.getElementById('cohortList')
// co.addEventListener('click', cohorts)
// document.getElementById('progressStats').addEventListener('click', getProgressStats)
// function getProgressEvents () { */
