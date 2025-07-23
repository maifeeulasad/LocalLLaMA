import React, { lazy, Suspense } from 'react';

const Page1m6wb5o = lazy(() => import('./Page'));

const LazyPage1m6wb5o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6wb5o />
  </Suspense>
);

export { LazyPage1m6wb5o };
