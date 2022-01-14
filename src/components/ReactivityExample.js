import { bind, Component, el, register } from "ovee.js";

@register('reactivity-example')
export class ReactivityExample extends Component {
    @el('.reactivity__input')
    input;

    @el('tasks-list')
    tasksListEl;

    get tasksList() {
        return this.tasksListEl._oveeComponentInstance;
    }

    @bind('submit', '.reactivity__input-wrapper')
    onAddTask(e) {
        e.preventDefault();

        const { value } = this.input;

        if (!value) return;

        this.tasksList.addTask(value);
        this.input.value = '';
    }
}
