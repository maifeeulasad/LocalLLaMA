import React, { lazy, Suspense } from 'react';

const Page1lxpidc = lazy(() => import('./Page'));

const LazyPage1lxpidc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxpidc />
  </Suspense>
);

export { LazyPage1lxpidc };
