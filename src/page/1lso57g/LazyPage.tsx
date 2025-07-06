import React, { lazy, Suspense } from 'react';

const Page1lso57g = lazy(() => import('./Page'));

const LazyPage1lso57g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lso57g />
  </Suspense>
);

export { LazyPage1lso57g };
