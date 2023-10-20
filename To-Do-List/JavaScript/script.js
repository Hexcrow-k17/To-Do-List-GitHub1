// Get references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Event listener for the input box
inputBox.addEventListener('keyup', function (event) {
    // Check if the enter key was pressed
    if (event.keyCode === 13) {
        // If enter key was pressed add a new task
        addTask();
    }
});