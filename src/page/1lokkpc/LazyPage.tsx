import React, { lazy, Suspense } from 'react';

const Page1lokkpc = lazy(() => import('./Page'));

const LazyPage1lokkpc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lokkpc />
  </Suspense>
);

export { LazyPage1lokkpc };
