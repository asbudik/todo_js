var task = document.getElementById('task');
var submit = document.getElementById('submission');
var taskList = document.getElementById('task_list');
var form = document.getElementById('to_do_form');

submit.onclick = function(event) {
  event.preventDefault();
  var newListElement = document.createElement('li');
  var createButton = document.createElement('button');
  var listValue = document.createTextNode(task.value);


  // createButton.onclick = function(event) {
  //   taskList.removeChild(newListElement);
  // }

  taskList.appendChild(newListElement);
  newListElement.appendChild(createButton);
  createButton.innerHTML = "X";
  newListElement.appendChild(listValue);
  form.reset();
}

document.getElementById("task_list").addEventListener("click", function(event){
  if (event.target && event.target.nodeName === "BUTTON") {
    taskList.removeChild(event.target.parentNode);
  }
})