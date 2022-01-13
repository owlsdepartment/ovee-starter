import { register, TemplateComponent } from "ovee.js";

@register('hello-world')
export class HelloWorld extends TemplateComponent {
    template() {
        return this.html`
            <h1>
                Hello World from Template Component!
            </h1>
        `
    }
}
