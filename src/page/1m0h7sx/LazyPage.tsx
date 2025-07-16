import React, { lazy, Suspense } from 'react';

const Page1m0h7sx = lazy(() => import('./Page'));

const LazyPage1m0h7sx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0h7sx />
  </Suspense>
);

export { LazyPage1m0h7sx };
