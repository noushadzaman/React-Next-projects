import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import { useState } from "react";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";

const TaskBoard = () => {
    const defaultTask = {
        "id": crypto.randomUUID(),
        "title": "Integration API",
        "description": "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        "tags": ["Web", "Python", "API"],
        "priority": "High",
        "isFavorite": true
    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    function handleAddTask(newTask, isAdd) {
        if (isAdd) {
            setTasks([...tasks, newTask])
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task
                })
            )
        }
        setShowAddModal(false);
    }

    function handleEditTask(task) {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    function handleCloseClick() {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    function onDelete(taskId) {
        const tasksAfterDelete = tasks.filter(task => task.id !== taskId);
        setTasks(tasksAfterDelete);
    }

    function onDeleteAllClick() {
        setTasks([]);
    }

    function handleFavorite(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks)
    }

    function handleSearch(searchTerm) {
        const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setTasks([...filtered]);
    }

    return (
        <section className="mb-20" id="tasks">
            {showAddModal &&
                <AddTaskModal
                    onSave={handleAddTask}
                    onCloseClick={handleCloseClick}
                    taskToUpdate={taskToUpdate}
                />}
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask onSearch={handleSearch} />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions
                        onAddClick={() => setShowAddModal(true)}
                        onDeleteAllClick={onDeleteAllClick}
                    />
                    {
                        tasks.length > 0 ?
                            (<TaskList
                                tasks={tasks}
                                onEdit={handleEditTask}
                                onDelete={onDelete}
                                onFav={handleFavorite}
                            />)
                            : <NoTasksFound />
                    }
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;