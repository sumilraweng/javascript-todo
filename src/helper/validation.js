// throwError is the function which throw the new error with message  

const throwError=( message)=>{
    throw new Error(message);
}

// validation function validate the task is not the the empty and 
// doesnot contain markup  
export const validation=(task)=>{
    if(task.length==0){
        return  throwError("Input not contain any task ");
    }
    if(task.includes("<")){
        return  throwError("Enter task without html markup ");
    }
}