import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import { useElementComponents } from './plugins/element.js'
import { setDirectives } from './directives/index'
const app = createApp(App);
setDirectives(app);
app.use(store).use(router).use(useElementComponents).mount('#app');

