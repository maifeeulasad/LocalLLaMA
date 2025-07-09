import React, { lazy, Suspense } from 'react';

const Page1lvcyvf = lazy(() => import('./Page'));

const LazyPage1lvcyvf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvcyvf />
  </Suspense>
);

export { LazyPage1lvcyvf };
