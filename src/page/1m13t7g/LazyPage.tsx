import React, { lazy, Suspense } from 'react';

const Page1m13t7g = lazy(() => import('./Page'));

const LazyPage1m13t7g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m13t7g />
  </Suspense>
);

export { LazyPage1m13t7g };
