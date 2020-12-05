// removeTask function called from data.js
import { removeTask } from "../helper/data.js";

// taskCompleted function is called from taskCompleted.js
import { taskCompleted } from "../helper/taskCompleted.js";

// Task function is the copmonent which create the li tag and inside the li tag we craete
// deleteIcon button which is basically the close button

export const Task = function (object) {
  const liTag = document.createElement("li");
  const textArea = document.createElement("span");
  const createdTime = document.createElement("span");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt";

  createdTime.classList.add("created-time");
  textArea.classList.add("text");
  deleteIcon.classList.add("close");
  //deleteIcon is the close button on which we added the event listner by clicking on it
  deleteIcon.addEventListener("click", (event) => {
    // event.stopPropagation will stop the bubble effect when clickin on deleteIcon which is child of li tag
    event.stopPropagation();

    //getParent is the function which remove the parent of deleteIcon which is li Tag
    getParent(event);
  });

  createdTime.innerText = ` ${new Date(object.createdAt).toLocaleString()}`;
  // const d = new Date(object.createdAt);

  // on li Tag task description, id, class(completed/incomplete), deleteIcon(close button) is added
  textArea.innerText = object.taskDescription;
  liTag.id = object.id;
  liTag.classList.add(object.status);
  liTag.append(textArea, createdTime, deleteIcon);

  // event listner is added on li Tag
  // when task is completed by clicking on li tag
  if (object.status !== "completed") {
    liTag.addEventListener("click", (event) => {
      event.stopPropagation();
      taskCompleted(event.target.id);
    });
    textArea.addEventListener("click", (event) => {
      event.stopPropagation();
      const parentNode = event.target.parentNode;
      const id = parentNode.getAttribute("id");
      taskCompleted(id);
    });
    createdTime.addEventListener("click", (event) => {
      event.stopPropagation();
      const parentNode = event.target.parentNode;
      const id = parentNode.getAttribute("id");
      taskCompleted(id);
    });
  }
  return liTag;
};

// get parent is called when click on deleteIcon(close button)
// here we are fetching the li tag by using the id and remove it by removeChild
// taskObject is removed from localStorage by using removeTask function
function getParent(event) {
  const parentNode = event.target.parentNode;
  const id = parentNode.getAttribute("id");
  const liTag = document.getElementById(id);
  liTag.parentNode.removeChild(liTag);
  removeTask(id);
}
