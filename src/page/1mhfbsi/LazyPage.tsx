import React, { lazy, Suspense } from 'react';

const Page1mhfbsi = lazy(() => import('./Page'));

const LazyPage1mhfbsi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhfbsi />
  </Suspense>
);

export { LazyPage1mhfbsi };
