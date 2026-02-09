var myTasks = [];
var addTask = function (task) {
    myTasks.push(task);
    console.log(task + " has been added to my taks list.");
    return myTasks.length;
};
function listAllItems() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in my task list.");
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " is not in my Task list.");
    }
    else {
        myTasks.splice(index, 1);
    }
}
addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
listAllItems();
