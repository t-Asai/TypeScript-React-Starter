import Top from '~/containers/Top';
import Hello from '~/containers/Hello';
import SeeYou from '~/containers/SeeYou';

const routes = [
  {
    path: '/',
    exact: true,
    component: Top
  },
  {
    path: '/hello',
    exact: true,
    component: Hello
  },
  {
    path: '/seeyou',
    exact: true,
    component: SeeYou,
  }
];

export default routes;