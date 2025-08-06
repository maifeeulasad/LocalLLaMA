import React, { lazy, Suspense } from 'react';

const Page1miwghr = lazy(() => import('./Page'));

const LazyPage1miwghr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwghr />
  </Suspense>
);

export { LazyPage1miwghr };
