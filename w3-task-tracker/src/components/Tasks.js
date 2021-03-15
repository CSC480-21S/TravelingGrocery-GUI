import Task from './Task'

// Want array of tasks inside component, not outside component
// States are immutable, states are recreated and sent, 1 way data

// Don't want tasks in task component, because other components access tasks
// Want tasks in App.js, so it's global state, then pull them as props

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task, index)=> (
                <Task key={index} task={task} 
                onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
