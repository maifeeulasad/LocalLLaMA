import React, { lazy, Suspense } from 'react';

const Page1lxwb4m = lazy(() => import('./Page'));

const LazyPage1lxwb4m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxwb4m />
  </Suspense>
);

export { LazyPage1lxwb4m };
