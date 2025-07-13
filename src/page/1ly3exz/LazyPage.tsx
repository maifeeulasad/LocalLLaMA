import React, { lazy, Suspense } from 'react';

const Page1ly3exz = lazy(() => import('./Page'));

const LazyPage1ly3exz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly3exz />
  </Suspense>
);

export { LazyPage1ly3exz };
