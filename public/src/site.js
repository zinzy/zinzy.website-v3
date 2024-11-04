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
      button.classList.add('playing');
      console.log("hello")
    });
  });

function timeSincePublished(publishedDate) {
  const now = new Date();
  const published = new Date(publishedDate);
  const timeDifference = now - published;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
      return years + (years === 1 ? " year" : " years") + " ago";
  } else if (months > 0) {
      return months + (months === 1 ? " month" : " months") + " ago";
  } else if (days > 0) {
      return days + (days === 1 ? " day" : " days") + " ago";
  } else if (hours > 0) {
      return hours + (hours === 1 ? " hour" : " hours") + " ago";
  } else if (minutes > 0) {
      return minutes + (minutes === 1 ? " minute" : " minutes") + " ago";
  } else {
      return seconds + (seconds === 1 ? " second" : " seconds") + " ago";
  }
}

const publishedDate = document.getElementById("timeSincePublished").getAttribute("data-published");
const timeSince = timeSincePublished(publishedDate);
document.getElementById("timeSinceDisplay").innerText = timeSince;
console.log(timeSince);

 // JavaScript to convert Hugo date into a relative date
 function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
          return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
  }
  return 'just now';
}

// Get the date from the data attribute
const dateElement = document.getElementById('relative-date');
const dateString = dateElement.getAttribute('data-date');

// Convert to relative date and update the span content
dateElement.textContent = timeAgo(dateString);