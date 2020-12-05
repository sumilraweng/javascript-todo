// push function will push the object in local Storage
export const pushTask = (taskObject) => {
  localStorage.setItem(taskObject.id, JSON.stringify(taskObject));
};

export const getTaskById = (objectId) => {
  return taskListObject.find((object) => {
    return object.id == objectId;
  });
};

export const updateTaskById = (taskId, propertyName, updateValue) => {
  let obj = JSON.parse(localStorage.getItem(taskId));
  obj[propertyName] = updateValue;
  localStorage.setItem(taskId, JSON.stringify(obj));
  // console.log( JSON.parse( localStorage.getItem(taskId)))
};

export const removeTask = (taskObjectId) => {
  // console.log(taskObjectId);
  localStorage.removeItem(taskObjectId);
  // console.log( localStorage)
};
