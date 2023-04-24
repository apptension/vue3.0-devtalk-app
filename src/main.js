import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ToDoItem from './lessons/lesson_06/ToDoItem.vue';

createApp(App)
  .component('to-do-item', ToDoItem)
  .use(store)
  .use(router)
  .mount('#app');
