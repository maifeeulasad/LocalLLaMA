import React, { lazy, Suspense } from 'react';

const Page1lxbynb = lazy(() => import('./Page'));

const LazyPage1lxbynb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxbynb />
  </Suspense>
);

export { LazyPage1lxbynb };
