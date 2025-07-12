import React, { lazy, Suspense } from 'react';

const Page1lxvh5t = lazy(() => import('./Page'));

const LazyPage1lxvh5t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxvh5t />
  </Suspense>
);

export { LazyPage1lxvh5t };
