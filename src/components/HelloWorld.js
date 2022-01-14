import { dataParam, register, TemplateComponent } from "ovee.js";

@register('hello-world')
export class HelloWorld extends TemplateComponent {
    @dataParam()
    name;

    template() {
        return this.html`
            <h2>
                Hello, World!
            </h2>

            ${this.name && this.html`
                <h4>And hello, ${this.name}!</h4>
            `}
        `
    }
}
