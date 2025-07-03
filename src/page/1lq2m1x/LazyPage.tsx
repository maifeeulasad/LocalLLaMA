import React, { lazy, Suspense } from 'react';

const Page1lq2m1x = lazy(() => import('./Page'));

const LazyPage1lq2m1x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq2m1x />
  </Suspense>
);

export { LazyPage1lq2m1x };
