import React, { lazy, Suspense } from 'react';

const Page1m0d47q = lazy(() => import('./Page'));

const LazyPage1m0d47q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0d47q />
  </Suspense>
);

export { LazyPage1m0d47q };
