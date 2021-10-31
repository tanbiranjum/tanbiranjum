;(function () {
  const darkModeBtn = document.querySelector('.dark-mode__btn')
  const body = document.querySelector('body')
  const container = document.querySelector('.container')

  darkModeBtn.addEventListener('click', () => {
    darkModeBtn.innerHTML === 'OFF' ? btnToggle(true) : btnToggle(false)
  })

  const btnToggle = (isClicked) => {
    if (isClicked) {
      darkModeBtn.innerHTML = 'ON'
      body.style.color = '#fff'
      body.style.backgroundColor = 'black'
      container.style.color = '#fff'
      container.style.backgroundColor = 'black'
      return
    }
    darkModeBtn.innerHTML = 'OFF'
    body.style.color = '#444'
    body.style.backgroundColor = 'rgb(219, 219, 219)'
    container.style.color = '#444'
    container.style.backgroundColor = '#fff'
  }
})()
