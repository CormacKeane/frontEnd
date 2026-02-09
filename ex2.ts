//interface implementation with all functions included
interface myInter {
    myTasks: string[];
    addTasks(task: string): number;
    listAllItems():void;
    deleteTask(task:string):number;


}

class Tasks implements myInter {
    constructor() { }

    //array init
    myTasks: string[] = [];

    //Add task function to push on to array
    addTasks(task: string): number {
        this.myTasks.push(task);
        console.log(task + " has been added to my taks list.");
        return this.myTasks.length;
    }

    //for loop to list all task in the array
    listAllItems(): void {
        for (let i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my task list.");
        }
    }

    //function to splice array to delete specific index
    deleteTask(Task: string): number {
        let index: number = this.myTasks.indexOf(Task);
        if (index === -1) {
            console.log(Task + " is not in my Task list.")
        } else {
            this.myTasks.splice(index, 1);
            console.log(Task+" has been removed from your task list."); 
        }
        return this.myTasks.length;
    }

}

//creating instance of interface and running test commands
let myToDo = new Tasks();
myToDo.addTasks("Eat");
myToDo.addTasks("Sleep");
myToDo.deleteTask("Sleep");
myToDo.listAllItems();


