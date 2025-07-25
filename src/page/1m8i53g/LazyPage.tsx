import React, { lazy, Suspense } from 'react';

const Page1m8i53g = lazy(() => import('./Page'));

const LazyPage1m8i53g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8i53g />
  </Suspense>
);

export { LazyPage1m8i53g };
