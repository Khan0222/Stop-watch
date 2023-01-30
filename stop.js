let display = document.querySelector("#NUM");
let start = document.querySelector(".start");
let stope = document.querySelector(".stop");
let rest = document.querySelector(".rest");
let secs = document.querySelector(".seconds");
let tens = document.querySelector(".tens");
let Interval;
let log = document.querySelector(".log");
let midl = document.querySelector(".left");
let sr2 = document.querySelector(".sr2");

let ten = 00;
let sec = 00;

function startTimer() {
  if (ten <= 9) {
    tens.innerHTML = "0" + ten++;
  }

  if (ten > 9) {
    tens.innerHTML = ten++;
  }

  if (ten > 99) {
    console.log("sec");
    sec++;
    secs.innerHTML = "0" + sec;
    ten = 0;
    tens.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    secs.innerHTML = sec;
  }
}

start.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

stope.onclick = function () {
  clearInterval(Interval);
};

rest.onclick = function () {
  clearInterval(Interval);
  ten = "0" + 00;
  sec = "0" + 00;
  tens.innerHTML = ten;
  secs.innerHTML = sec;
};
