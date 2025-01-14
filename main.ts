import { createApp } from 'vue';
import router from './src/pages/router';
import './src/pages/style/reset.scss';
import './src/pages/style/global.scss';
import Main from './src/pages/Main.vue';

const app = createApp(Main);
app.use(router);
app.mount('#app');