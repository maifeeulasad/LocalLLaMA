import React, { lazy, Suspense } from 'react';

const Page1mccxrt = lazy(() => import('./Page'));

const LazyPage1mccxrt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mccxrt />
  </Suspense>
);

export { LazyPage1mccxrt };
