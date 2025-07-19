import React, { lazy, Suspense } from 'react';

const Page1m3nb1q = lazy(() => import('./Page'));

const LazyPage1m3nb1q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3nb1q />
  </Suspense>
);

export { LazyPage1m3nb1q };
