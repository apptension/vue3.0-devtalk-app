import { createRouter, createWebHashHistory } from 'vue-router';
import StateLesson from '../lessons/lesson_01/StateLesson.vue';
import BindingLesson from '../lessons/lesson_02/BindingLesson.vue';
import EventsLesson from '../lessons/lesson_03/EventsLesson.vue';
import ComputedLesson from '../lessons/lesson_04/ComputedLesson.vue';
import StylingLesson from '../lessons/lesson_05/StylingLesson.vue';
import ComponentLesson from '../lessons/lesson_06/ComponentLesson.vue';
import DynamicLesson from '../lessons/lesson_07/DynamicLesson.vue';
import SlotsLesson from '../lessons/lesson_08/SlotsLesson.vue';
import VuexLesson from '../lessons/lesson_09/VuexLesson.vue';

const routes = [
  {
    path: '/lesson-01',
    name: 'lesson-01',
    component: StateLesson,
  },
  {
    path: '/lesson-02',
    name: 'lesson-02',
    component: BindingLesson,
  },
  {
    path: '/lesson-03',
    name: 'lesson-03',
    component: EventsLesson,
  },
  {
    path: '/lesson-04',
    name: 'lesson-04',
    component: ComputedLesson,
  },
  {
    path: '/lesson-05',
    name: 'lesson-05',
    component: StylingLesson,
  },
  {
    path: '/lesson-06',
    name: 'lesson-06',
    component: ComponentLesson,
  },
  {
    path: '/lesson-07',
    name: 'lesson-07',
    component: DynamicLesson,
  },
  {
    path: '/lesson-08',
    name: 'lesson-08',
    component: SlotsLesson,
  },
  {
    path: '/lesson-09',
    name: 'lesson-09',
    component: VuexLesson,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
