
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let myBirthday = new Date("Jan, 03 2023 23:59:59").getTime();


  x = setInterval(() => {    

    const now = new Date().getTime(),
          diff = myBirthday - now;
    let seconds = Math.floor((diff % (minute)) / second),
        min = Math.floor((diff % (hour)) / (minute)),
        hours = Math.floor((diff % (day)) / (hour)),
        days = Math.floor(diff / (day));

        document.querySelector(".days").innerText = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerText = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerText = min < 10 ? `0${min}` : min;
        document.querySelector(".seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
  }, 0)

  let bars = document.querySelector('.bars');

  bars.addEventListener('click',()=> {
    document.querySelector('.links').classList.contains("res") ? document.querySelector('.links').classList.remove('res') : document.querySelector('.links').classList.add('res')
  })