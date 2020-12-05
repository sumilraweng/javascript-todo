 

import {submissionForm} from"./helper/submissionForm.js"
import {display} from"./helper/display.js"


// onload function is used because it will called 
// when whole html body render first

window.onload = () => {

    // In this we are fetching Form from index.html file and adding the 
    // event listner to the submit button and we created the submissionform and 
    // form is submmited then submissionForm function is implemneted
    document.forms.taskList.addEventListener("submit",()=>{
        submissionForm(event);
    })

    // here we are checking  localStorage length if localstorage has any task 
    // length will be greater than zero and display function is called
    // display function display all the  stored previously task in localstorage with status of completed and incomplete task

    if(localStorage.length){
        display();
    }
    



}

