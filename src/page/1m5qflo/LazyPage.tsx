import React, { lazy, Suspense } from 'react';

const Page1m5qflo = lazy(() => import('./Page'));

const LazyPage1m5qflo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5qflo />
  </Suspense>
);

export { LazyPage1m5qflo };
