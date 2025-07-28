import React, { lazy, Suspense } from 'react';

const Page1mbako7 = lazy(() => import('./Page'));

const LazyPage1mbako7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbako7 />
  </Suspense>
);

export { LazyPage1mbako7 };
