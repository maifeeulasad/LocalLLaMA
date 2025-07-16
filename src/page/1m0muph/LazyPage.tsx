import React, { lazy, Suspense } from 'react';

const Page1m0muph = lazy(() => import('./Page'));

const LazyPage1m0muph = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0muph />
  </Suspense>
);

export { LazyPage1m0muph };
