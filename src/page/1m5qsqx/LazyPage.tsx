import React, { lazy, Suspense } from 'react';

const Page1m5qsqx = lazy(() => import('./Page'));

const LazyPage1m5qsqx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5qsqx />
  </Suspense>
);

export { LazyPage1m5qsqx };
