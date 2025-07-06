import React, { lazy, Suspense } from 'react';

const Page1ls91w3 = lazy(() => import('./Page'));

const LazyPage1ls91w3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls91w3 />
  </Suspense>
);

export { LazyPage1ls91w3 };
