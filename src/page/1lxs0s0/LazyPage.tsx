import React, { lazy, Suspense } from 'react';

const Page1lxs0s0 = lazy(() => import('./Page'));

const LazyPage1lxs0s0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxs0s0 />
  </Suspense>
);

export { LazyPage1lxs0s0 };
