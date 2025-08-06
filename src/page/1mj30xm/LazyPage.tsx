import React, { lazy, Suspense } from 'react';

const Page1mj30xm = lazy(() => import('./Page'));

const LazyPage1mj30xm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj30xm />
  </Suspense>
);

export { LazyPage1mj30xm };
