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

// adding paragraph to activity history
// addElemInHistory("fix-mobile", "history-container");
