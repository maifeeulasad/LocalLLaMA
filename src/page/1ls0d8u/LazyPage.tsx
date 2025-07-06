import React, { lazy, Suspense } from 'react';

const Page1ls0d8u = lazy(() => import('./Page'));

const LazyPage1ls0d8u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls0d8u />
  </Suspense>
);

export { LazyPage1ls0d8u };
