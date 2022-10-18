import { createApp } from 'vue';
import App from './App.vue';
import './core/axios';

import router from './core/router';


// import './assets/main.css'

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';

// createApp(Home).mount('#app')
const app = createApp(App);

app.use(router);

app.mount('#app');
