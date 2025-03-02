const discover = document
  .getElementById("discover")
  .addEventListener("click", function () {
    window.location.href = "../blog.html";
  });

let completeBtn = document.getElementsByClassName("completed");

for (let btn of completeBtn) {
  btn.addEventListener("click", function (event) {
    // alert on clicking completed button
    alert("Board Updated Successfully");
    let taskNumber = convertToNumberById("task-assigned");
    taskNumber -= 1;

    // assigning the new task number to the HTML element
    replaceElementById("task-assigned", taskNumber);
    if (taskNumber === 0) {
      alert("Congrats! You have completed all the current tasks.");
    }

    // accessing checkbox number
    let checkboxNumber = convertToNumberById("checkbox-number");
    checkboxNumber += 1;

    // assigning the new checkbox number to the HTML element
    replaceElementById("checkbox-number", checkboxNumber);

    // disabling the completed button
    disableCompletedBtn(btn);

    // targeting events
    const targetedEvent =
      event.target.parentElement.parentElement.querySelectorAll("h2")[0]
        .innerText;

    const logParent = document.getElementById("history-container");
    const thisTime = currentTime();
    const logPara = document.createElement("p");
    logPara.innerText = `You have successfully completed ${targetedEvent} task at ${thisTime}`;
    logParent.appendChild(logPara);
  });
}

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});

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

document.getElementById("board-date").innerText = `${currentDate()}`;

// color button

const colors = [
  "#ff8080",
  "#ffb3ff",
  "#b3ffe0",
  "#b3e0ff",
  "#b3f0ff",
  "#F4F7FF",
  "#ffffb3",
  "#ffe0b3",
  "#e6ccb3",
  "#ecffb3",
];
document.getElementById("color-btn").addEventListener("click", function () {
  const random = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = `${colors[random]}`;
});
