import HomeView from 'views/HomeView';
import NotFound from 'components/core/NotFound';

export default [
  { path: '/', component: HomeView },
  { path: '*', component: NotFound },
];
