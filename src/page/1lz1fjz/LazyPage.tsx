import React, { lazy, Suspense } from 'react';

const Page1lz1fjz = lazy(() => import('./Page'));

const LazyPage1lz1fjz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz1fjz />
  </Suspense>
);

export { LazyPage1lz1fjz };
