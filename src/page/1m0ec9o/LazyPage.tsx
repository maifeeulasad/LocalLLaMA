import React, { lazy, Suspense } from 'react';

const Page1m0ec9o = lazy(() => import('./Page'));

const LazyPage1m0ec9o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0ec9o />
  </Suspense>
);

export { LazyPage1m0ec9o };
