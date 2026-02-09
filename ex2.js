var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTasks = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my taks list.");
        return this.myTasks.length;
    };
    Tasks.prototype.listAllItems = function () {
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my task list.");
        }
    };
    Tasks.prototype.deleteTask = function (Task) {
        var index = this.myTasks.indexOf(Task);
        if (index === -1) {
            console.log(Task + " is not in my Task list.");
        }
        else {
            this.myTasks.splice(index, 1);
            console.log(Task + " has been removed from your task list.");
        }
        return this.myTasks.length;
    };
    return Tasks;
}());
var myToDo = new Tasks();
myToDo.addTasks("Eat");
myToDo.addTasks("Sleep");
myToDo.deleteTask("Sleep");
myToDo.listAllItems();
