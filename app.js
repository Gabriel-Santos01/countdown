const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const title = document.querySelector('.countdownTittle')

const countdown = new Date().getFullYear()

const countdownTime = new Date(`February 23 ${countdown} 15:37:00`)

function updateCountdown() {
  const currentTime = new Date()
  const diff = countdownTime - currentTime

  const d = Math.floor(diff / 1000 / 60 / 60 / 24)
  const h = Math.floor(diff / 1000 / 60 / 60) % 24
  const m = Math.floor(diff / 1000 / 60) % 60
  const s = Math.floor(diff / 1000) % 60

  days.innerHTML = d
  hours.innerHTML = h < 10 ? '0' + h : h
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s

  if (diff <= 0) {
    clearInterval(timer)
    title.innerHTML = 'FALCON 9 BLOCK 5 Group 6-1 HAS BE LAUNCHED'
    days.innerHTML = '00'
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'

    tsParticles.load('tsparticles', {
      emitters: [
        {
          life: {
            duration: 3,
            count: 5
          },
          rate: {
            delay: 0,
            quantity: 1
          },
          position: {
            x: 0,
            y: 20
          },
          particles: {
            move: {
              direction: 'top-right'
            }
          }
        },
        {
          life: {
            duration: 3,
            count: 5
          },
          rate: {
            delay: 0,
            quantity: 1
          },
          position: {
            x: 100,
            y: 20
          },
          particles: {
            move: {
              direction: 'top-left'
            }
          }
        }
      ],
      preset: 'confetti'
    })
  }
}

let timer = setInterval(updateCountdown, 1000)
