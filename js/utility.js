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

function addElemInHistory(titleId, historyContainer) {
  const elementTitle = document.getElementById(titleId).innerText;
  const newElem = (document.getElementById(
    historyContainer
  ).innerHTML = `You have completed the task ${elementTitle}`);
  newElem.style.backgroundColor = "#F4F7FF";
  newElem.style.borderRadius = "8px";
}
