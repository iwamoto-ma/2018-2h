import Home from './components/main/InputName.vue';
import Result from './components/main/Result.vue';

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/result',
    component: Result
  },
  {
    path: '*',
    redirect: '/'
  }
];


