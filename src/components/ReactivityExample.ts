import { defineComponent,  useQueryComponent, useQuerySelector } from "ovee.js";
import { TasksList } from "./TasksList";

export const ReactivityExample = defineComponent((_, { on }) => {
    const input = useQuerySelector<HTMLInputElement>('.reactivity__input')
    const tasksList = useQueryComponent(TasksList)

    on('submit', (e: Event) => {
        e.preventDefault()

        const { value } = input.value!;

        if (!value) return;

        tasksList.value?.addTask(value);
        input.value!.value = ''
    })
})
