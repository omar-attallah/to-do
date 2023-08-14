

function addTask() {
  var taskInput = document.getElementById("taskInput");
  
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  var taskList = document.getElementById("taskList");
  
  var li = document.createElement("li");
  
  var taskText = document.createTextNode(taskInput.value);
  
  li.appendChild(taskText);
  
  var removeButton = document.createElement("button");
  
  removeButton.innerHTML = "X";
  
  removeButton.onclick = function() {
    this.parentNode.remove();
  };
  
  li.appendChild(removeButton);
  
  taskList.appendChild(li);
  
   
   taskInput.value = "";
}
