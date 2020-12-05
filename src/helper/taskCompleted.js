// updateTaskById is function to update the property of the task objects
import { updateTaskById } from "./data.js";

// taskCompleted which change the status in object and change the class from incomplete to complete
export const taskCompleted = (eventId) => {
  updateTaskById(eventId, "status", "completed");
  document.getElementById(eventId).classList.remove("incomplete");
  document.getElementById(eventId).classList.add("completed");
};
