import { defineComponent, reactive, useTemplate } from "ovee.js";

interface Task {
    title: string
    done: boolean
}

export const TasksList = defineComponent(() => {
    const tasks = reactive<Task[]>([])

    function addTask(title: string) {
        tasks.push({ title, done: false })
    }

    function onToggleDone(task: Task) {
        task.done = !task.done
    }

    function onRemoveTask(i: number) {
        if (tasks[i]) {
            tasks.splice(i, 1);
        }
    }

    useTemplate(() => (
        <div class="tasks-list__list">
            {!tasks.length
                ? (
                    <p class="tasks-list__empty">
                        All done! You have no tasks
                    </p>
                )
                : tasks.map((task, i) => (
                    <div class={`tasks-list__task ${task.done ? 'tasks-list__task--done' : ''}`}>
                        <h4 class="tasks-list__title">{task.title}</h4>
                        
                        <div class="tasks-list__buttons">
                            <button
                                class="tasks-list__button tasks-list__button--done"
                                type="button"
                                onClick={() => onToggleDone(task)}
                            >
                                {task.done ? 'Undone' : 'Done'}
                            </button>

                            <button
                                class="tasks-list__button tasks-list__button--remove"
                                type="button"
                                onClick={() => onRemoveTask(i)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    ))

    return {
        addTask
    }
})