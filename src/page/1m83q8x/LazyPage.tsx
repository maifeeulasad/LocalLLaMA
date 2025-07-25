import React, { lazy, Suspense } from 'react';

const Page1m83q8x = lazy(() => import('./Page'));

const LazyPage1m83q8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m83q8x />
  </Suspense>
);

export { LazyPage1m83q8x };
