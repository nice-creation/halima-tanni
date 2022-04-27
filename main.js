setInterval(() => {
  let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// let text = document.getElementById('text')

  let dd = document.getElementById('dd')
  let hr = document.getElementById('hr')
  let min = document.getElementById('min')
  let sec = document.getElementById('sec')
  

  let date = new Date()
  let mon =new Date().getMonth()
  let d =new Date().getDate()
  let h =new Date().getHours()
  let m =new Date().getMinutes()
  let s =new Date().getSeconds()
  
  
  let totalDays = 0;
  let monArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if(date.getFullYear() % 4 == 0) {
    monArr[1] = 29
    if (date.getFullYear() % 100 == 0 &&new Date().getFullYear() % 400 != 0) {
      monArr[1] = 28
    }
  }
  
  for (let i = 0; i < mon; i++) {
    totalDays += monArr[i]
  }
  totalDays += d;
  
  let dateFunc = (input, place) => {
    input = (input < 10) ? "0" + input : input;
    place.innerHTML = input
  }
  
  dateFunc(29 - d, days)
  dateFunc(23 - h, hours)
  dateFunc(59 - m, minutes)
  dateFunc(59 - s, seconds)


  dd.style.strokeDashoffset = 440 - ((440 * (29-d)) / 30)
  hr.style.strokeDashoffset = 440 - ((440 * (24-h)) / 24)
  min.style.strokeDashoffset = 440 - ((440 * (60-m)) / 60)
  sec.style.strokeDashoffset = 440 - ((440 * (60-s)) / 60)



  let clock = document.getElementById('clock')
  let birthday= document.getElementById('birthday')

  if (totalDays > 119) {
    clock.style.display = "none"
    birthday.style.display = "visible"
  } else {
    clock.style.display = "visible"
    birthday.style.display = "none"
  }


})