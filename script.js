(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.querySelector(".days").innerText = Math.floor(distance / (day)),
            document.querySelector(".hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.querySelector(".minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.querySelector(".seconds").innerText = Math.floor((distance % (minute)) / second);
  
          
          //seconds
        }, 0)
    }());