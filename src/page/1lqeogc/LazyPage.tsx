import React, { lazy, Suspense } from 'react';

const Page1lqeogc = lazy(() => import('./Page'));

const LazyPage1lqeogc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqeogc />
  </Suspense>
);

export { LazyPage1lqeogc };
