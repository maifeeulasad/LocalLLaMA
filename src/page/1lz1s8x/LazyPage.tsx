import React, { lazy, Suspense } from 'react';

const Page1lz1s8x = lazy(() => import('./Page'));

const LazyPage1lz1s8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz1s8x />
  </Suspense>
);

export { LazyPage1lz1s8x };
