// taskConstructor it will craete the object
// {
//     taskDescription:"task",
//     id:(from the faker.js),
//     status:"incomplete",
//     createdAt:(using date function)
// }
export const taskConstructor= function(taskDescription){
    this.taskDescription=taskDescription;
    this.id=faker.random.uuid();
    this.status="incomplete"
    this.createdAt=Date.now();
}