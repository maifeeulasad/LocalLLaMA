import React, { lazy, Suspense } from 'react';

const Page1iy2t7c = lazy(() => import('./Page'));

const LazyPage1iy2t7c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iy2t7c />
  </Suspense>
);

export { LazyPage1iy2t7c };
