const mainEl = document.querySelector('#main')
const dateEl = mainEl.querySelector('#date')
const timeEl = mainEl.querySelector('#time')

function initialise() {
  const n = setTimeout(initialise, 1000)

  const now = new Date()
  const date = now.toLocaleDateString('en-GB')
  const time = now.toLocaleTimeString('en-GB')

  dateEl.innerHTML = `#${n} - ${date}`
  timeEl.innerHTML = time
}

initialise()
