import React, { lazy, Suspense } from 'react';

const Page1m95lud = lazy(() => import('./Page'));

const LazyPage1m95lud = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m95lud />
  </Suspense>
);

export { LazyPage1m95lud };
