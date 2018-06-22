import * as React from 'react';
import Top from '~/containers/Top';
import Hello from '~/containers/Hello';
import SeeYou from '~/containers/SeeYou';

const NotFound = () => (
  <div>
    <h1>Sorry, can’t find that.</h1>
  </div>
);

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
  },
  {
    path: '/',
    component: NotFound
  }
];

export default routes;