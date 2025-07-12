import React, { lazy, Suspense } from 'react';

const Page1lxn8ry = lazy(() => import('./Page'));

const LazyPage1lxn8ry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxn8ry />
  </Suspense>
);

export { LazyPage1lxn8ry };
