import { reactive, register, TemplateComponent } from "ovee.js";

@register('tasks-list')
export class TasksList extends TemplateComponent {
    @reactive()
    tasks = [];

    addTask(title) {
        this.tasks.push({ title, done: false });
    }

    onToggleDone(task) {
        task.done = !task.done;
    }

    onRemoveTask(i) {
        if (this.tasks[i]) {
            this.tasks.splice(i, 1);
        }
    }

    template() {
        const { html } = this;

        return html`
            <div class="tasks-list__list">
                ${!this.tasks.length
                    ? html`
                        <p class="tasks-list__empty">
                            All done! You have no tasks
                        </p>
                    `
                    : this.tasks.map((task, i) => html`
                        <div class="tasks-list__task ${task.done ? 'tasks-list__task--done' : ''}">
                            <h4 class="tasks-list__title">${task.title}</h4>
                            
                            <div class="tasks-list__buttons">
                                <button
                                    class="tasks-list__button tasks-list__button--done"
                                    type="button"
                                    @click="${() => this.onToggleDone(task)}"
                                >
                                    ${task.done ? 'Undone' : 'Done'}
                                </button>

                                <button
                                    class="tasks-list__button tasks-list__button--remove"
                                    type="button"
                                    @click="${() => this.onRemoveTask(i)}"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    `)
                }
            </div>
        `;
    }
}