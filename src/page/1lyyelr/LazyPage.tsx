import React, { lazy, Suspense } from 'react';

const Page1lyyelr = lazy(() => import('./Page'));

const LazyPage1lyyelr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyyelr />
  </Suspense>
);

export { LazyPage1lyyelr };
