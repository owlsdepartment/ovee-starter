import { register, TemplateComponent } from "ovee.js";

@register('app-header')
export class AppHeader extends TemplateComponent {
    links = [
        { url: '', name: 'Home' },
        { url: 'reactivity', name: 'Reactivity' },
    ];

    currentPath = document.location.pathname;

    template() {
        const { html } = this;

        return html`
            <header class="app-header">
                <div class="app-header__links">
                    ${this.links.map(link => {
                        const url = link.url ? `/${link.url}/` : '/';

                        return html`
                            <a class="app-header__link ${this.currentPath === url && 'app-header__link--current'}" href="${url}">${link.name}</a>
                        `
                    })}
                </div>
            </header>
        `;
    }
}
