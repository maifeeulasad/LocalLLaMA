import React, { lazy, Suspense } from 'react';

const Page1m0yw9z = lazy(() => import('./Page'));

const LazyPage1m0yw9z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0yw9z />
  </Suspense>
);

export { LazyPage1m0yw9z };
