import React, { lazy, Suspense } from 'react';

const Page1m2d7n2 = lazy(() => import('./Page'));

const LazyPage1m2d7n2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2d7n2 />
  </Suspense>
);

export { LazyPage1m2d7n2 };
