let myTasks:string[] = [];
let addTask=(task:string):number=>{
    myTasks.push(task);
    console.log(task+" has been added to my taks list.");
    return myTasks.length;
}

function listAllItems():void{
    for(let i=0;i<myTasks.length;i++){
        console.log("Task: "+myTasks[i]+ " is in my task list.");
    }
}

function deleteTask(task:string):void{
    let index:number=myTasks.indexOf(task);
    if(index===-1){
        console.log(task+" is not in my Task list.")
    }else{
        myTasks.splice(index,1);
    }
}



addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
listAllItems();