import React, { lazy, Suspense } from 'react';

const Page1mkrqmz = lazy(() => import('./Page'));

const LazyPage1mkrqmz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkrqmz />
  </Suspense>
);

export { LazyPage1mkrqmz };
