import React, { lazy, Suspense } from 'react';

const Page1lrv48g = lazy(() => import('./Page'));

const LazyPage1lrv48g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrv48g />
  </Suspense>
);

export { LazyPage1lrv48g };
