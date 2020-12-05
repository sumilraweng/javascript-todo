
// taskConstructor is the function which return task object 
import  {taskConstructor} from "./taskConstructor.js"

// Task is the copmonent which create list element and show on the html page
import {Task} from "../component/task.js"

// pushTask is the function which is called when new task is created and pushTask 
// stored into the localstorage
import {pushTask} from "./data.js";

// validation is the function which validated the user input task
import {validation} from "./validation.js"

// when new task is submit then submissionForm function is called
export const submissionForm=(event)=>{
    // prevent default will prevent from refreshing the file
    event.preventDefault(); 
    
    // try block is created when valdation throws an error while validating the user input 
    try{
        // we are storing the task in the value varaible from the Form
        let value=event.target.taskInput.value
        // value will be validate in validation function if any error it will throw the error
        validation(value)
        
        // if validation doesnot throw an error then task object s created by calling 
        // taskConstructor function
        let taskObject =new taskConstructor(value);
        // task object is then push into the local storage by the pushTask function
        pushTask(taskObject);

        // after task is cretaed and pushed into localstorgae it will then show onto html page 
        // under the ul tag having class "tasks" by appending the li tag which return from the Task(taskObject) 
        document.getElementById("tasks").appendChild(Task(taskObject));
        // after appending input field will be clear
        event.target.taskInput.value=""
    }
    // catch will catch the error if validation function throws an error
    catch(err){
        // alert will show the mesaage which is thrown by the validation function
        alert(err.message);
    }
    
    

}