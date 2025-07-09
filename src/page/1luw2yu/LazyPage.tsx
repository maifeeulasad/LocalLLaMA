import React, { lazy, Suspense } from 'react';

const Page1luw2yu = lazy(() => import('./Page'));

const LazyPage1luw2yu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luw2yu />
  </Suspense>
);

export { LazyPage1luw2yu };
