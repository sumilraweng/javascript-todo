// Task component is called to create the li Tag and append to the ul Tag
import {Task} from "../component/task.js"
// display function will do for loop on localStorage to get the task 
//object which is previously stored  and display on html page
export const display=()=>{

        
    for(let i =0;i<localStorage.length;i++){
        let taskObject=JSON.parse( localStorage[localStorage.key(i)])
        document.getElementById("tasks").appendChild(Task(taskObject));

        // document.getElementById("tasks").appendChild()
    }

}