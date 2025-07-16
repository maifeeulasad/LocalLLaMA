import React, { lazy, Suspense } from 'react';

const Page1m1701z = lazy(() => import('./Page'));

const LazyPage1m1701z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1701z />
  </Suspense>
);

export { LazyPage1m1701z };
