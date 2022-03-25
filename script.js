let datetime;
let date;
let time;

setInterval(() => {
  datetime = new Date();
  date = datetime.toLocaleDateString();
  time =
    datetime.getHours() +
    ":" +
    datetime.getMinutes() +
    ":" +
    datetime.getSeconds();
  document.getElementById("time").innerHTML = "Time: " + time;
  document.getElementById("date").innerHTML = "Date: " + date;
}, 1000);
