import React, { lazy, Suspense } from 'react';

const Page1m52h8x = lazy(() => import('./Page'));

const LazyPage1m52h8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52h8x />
  </Suspense>
);

export { LazyPage1m52h8x };
