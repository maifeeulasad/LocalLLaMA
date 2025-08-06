import React, { lazy, Suspense } from 'react';

const Page1mj2hih = lazy(() => import('./Page'));

const LazyPage1mj2hih = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2hih />
  </Suspense>
);

export { LazyPage1mj2hih };
