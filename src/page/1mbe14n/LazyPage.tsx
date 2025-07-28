import React, { lazy, Suspense } from 'react';

const Page1mbe14n = lazy(() => import('./Page'));

const LazyPage1mbe14n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbe14n />
  </Suspense>
);

export { LazyPage1mbe14n };
