function convertToNumberById(id) {
  const elem = document.getElementById(id).innerText;
  const convertedElem = parseInt(elem);
  return convertedElem;
}

function replaceElementById(id, replacement) {
  document.getElementById(id).innerText = replacement;
}

function disableCompletedBtn(btn) {
  btn.disabled = true;
  btn.style.backgroundColor = "rgb(55, 82, 253)";
  btn.style.opacity = "0.2";
}

function currentDate() {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const thisDay = days[date.getDay()];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const thisMonth = months[date.getMonth()];

  const thisDate = date.getDate();
  const thisYear = date.getFullYear();

  return `${thisDay}, ${thisMonth} ${thisDate}, ${thisYear}`;
}

function currentTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return time;
}
