import React, { lazy, Suspense } from 'react';

const Page1lxzn8c = lazy(() => import('./Page'));

const LazyPage1lxzn8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxzn8c />
  </Suspense>
);

export { LazyPage1lxzn8c };
