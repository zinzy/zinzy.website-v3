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
  
  
  document.addEventListener("DOMContentLoaded", function() {
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

    const publishedDate = document.getElementById("time-since-published").getAttribute("data-published");
    const timeSince = timeSincePublished(publishedDate);
    document.getElementById("time-since-published").innerText = timeSince;
});



  const audio = new Audio("/src/pronunciation.mp3");
  const buttons = document.querySelectorAll(".name");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });



  const tabs = document.querySelector(".library");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}