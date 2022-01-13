import '../style.css';

import { App } from 'ovee.js'
import components from './components';

const root = document.getElementById('app');
const app = new App({
    components,
});

app.run(root);
