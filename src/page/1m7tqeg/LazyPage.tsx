import React, { lazy, Suspense } from 'react';

const Page1m7tqeg = lazy(() => import('./Page'));

const LazyPage1m7tqeg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7tqeg />
  </Suspense>
);

export { LazyPage1m7tqeg };
