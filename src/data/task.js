import { toast } from "react-toastify";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const randId = () => {
    return Math.floor(Math.random() * 10000)
}

// store the tasks

const createTask = async ( task ) => {
    try{
        const extTask = tasks.find((item) => item.title === task.title);
        if(extTask) {
            toast.warning('Task already exist.');
        } else{
            const newTask = {
                id: randId(),
                ...task
            }
            tasks.push(newTask);
            saveTask(tasks);
            toast.success('New task created Successfully');
            window.location.href ="/";
        }
    } catch (err) {
        toast.error(err.message);
    }
} 

// read all task
const readAllTask = () => {
    return tasks;
}

// read single talk
const readSingleTalk = (id) => {
    const data = tasks.find((item) => item.id === id)
    return data;
}

//update logic
const updateTask = (id,task) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id);
        tasks.splice(taskIndex,1,task);
        saveTask(tasks)
        toast.success(`"Updated successfully"`)
        window.location.href = "/"
    } catch (err) {
        toast.error(err.message)
    }
}

//delete logic
const deleteTask = (id ) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id);
        tasks.splice(taskIndex,1);
        saveTask(tasks)
        toast.success(` ${id} Deleted successfully`)
        window.location.href = "/"
    } catch (err) {
        toast.error(err.message)
    }
}


//save the task
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
}

export { createTask , readAllTask, readSingleTalk, updateTask , deleteTask}
