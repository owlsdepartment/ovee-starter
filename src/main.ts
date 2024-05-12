import '~/styles/style.css';
import '~/styles/main.scss';

import { createApp } from 'ovee.js'
import components from './components';

const root = document.getElementById('app')!;

createApp()
    .components(components)
    .run(root)
