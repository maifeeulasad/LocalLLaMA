import React, { lazy, Suspense } from 'react';

const Page1m44tnz = lazy(() => import('./Page'));

const LazyPage1m44tnz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m44tnz />
  </Suspense>
);

export { LazyPage1m44tnz };
