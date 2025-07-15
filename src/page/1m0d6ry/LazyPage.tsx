import React, { lazy, Suspense } from 'react';

const Page1m0d6ry = lazy(() => import('./Page'));

const LazyPage1m0d6ry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0d6ry />
  </Suspense>
);

export { LazyPage1m0d6ry };
