function addNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;
  var listItem = document.createElement("text");
  var checkbox = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");
  listItem.className="list-item"
  checkbox.className="list-item"
  checkbox.className="check-box"

  if(text.length===0){
    return;
  }

  const textElement = document.createTextNode(text);

  listItem.appendChild(textElement);
  list.appendChild(checkbox);
  list.appendChild(listItem);
  list.appendChild(document.createElement("p"));
}