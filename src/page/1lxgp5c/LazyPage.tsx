import React, { lazy, Suspense } from 'react';

const Page1lxgp5c = lazy(() => import('./Page'));

const LazyPage1lxgp5c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxgp5c />
  </Suspense>
);

export { LazyPage1lxgp5c };
