function settime() {
    const timestamp = document.querySelector('[data-timestamp-text]')
    if (!timestamp || !('Intl' in window)) return
  
    const options = {
      timeZone: "Europe/Amsterdam",
      timeStyle: "short",
      hour12: true
    }
  
    // https://gist.github.com/muan/e7414b6241f088090acd916ed965540e
    let time = new Intl.DateTimeFormat(navigator.language || "zh-TW", options).format(new Date())
  
    // Setting interpolated string instead of just the time because
    // if there's no JS there should be no mentions of current time
    const text = timestamp.getAttribute('data-timestamp-text').replace('{time}', time)
    timestamp.innerHTML = text.replace(':', '<span class="timestamp-colon" data-colon>:</span>')
  
    const now = new Date()
    const sec = now.getSeconds()
    const secondIsEven = sec % 2 === 0
    const colon = document.querySelector('[data-colon]')
    if (colon) colon.style.animationDelay = `${(secondIsEven ? 0 : 1000) - now.getMilliseconds()}ms`
  
    const delay = 60000 - ((sec * 1000) + now.getMilliseconds())
    setTimeout(settime, delay)
  }
  
  settime()
  
  
  function relativeDate(date) {
    const now = new Date()
    const diff = now - date
    const hour = 1000 * 60 * 60
    const day = hour * 24
    const week = day * 7
    const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' })
  
    if (diff < hour) {
      return rtf.format(-Math.floor(diff / 60000), 'minute')
    } else if (diff < day) {
      return rtf.format(-Math.floor(diff / hour), 'hour')
    } else if (diff < week) {
      return rtf.format(-Math.floor(diff / day), 'day')
    } else {
      return
    }
  }

  const audio = new Audio("/src/pronunciation.mp3");
  const buttons = document.querySelectorAll(".name");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });