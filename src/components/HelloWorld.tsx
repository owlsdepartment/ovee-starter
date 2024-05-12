import { defineComponent, useDataAttr, useTemplate } from "ovee.js";

export const HelloWorld = defineComponent(() => {
    const name = useDataAttr('name')

    useTemplate(() => <>
        <h2>Hello, World!</h2>

        {name.value && <h4>And hello, {name.value}!</h4>}
    </>)
})
