import { defineComponent, useTemplate } from "ovee.js";

export const AppHeader = defineComponent(() => {
    const links = [
        { url: '', name: 'Home' },
        { url: 'reactivity', name: 'ToDo List' },
    ]
    const currentPath = document.location.pathname

    useTemplate(() => (
        <header class="app-header">
            <div class="app-header__links">
                {links.map(link => {
                    const url = link.url ? `/${link.url}/` : '/'

                    return <a class={`app-header__link ${currentPath === url ? 'app-header__link--current' : ''}`} href={url}>{link.name}</a>
                })}
            </div>
        </header>
    ))
})
