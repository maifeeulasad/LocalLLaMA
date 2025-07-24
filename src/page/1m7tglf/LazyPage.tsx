import React, { lazy, Suspense } from 'react';

const Page1m7tglf = lazy(() => import('./Page'));

const LazyPage1m7tglf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7tglf />
  </Suspense>
);

export { LazyPage1m7tglf };
