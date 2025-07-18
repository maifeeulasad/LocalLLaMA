import React, { lazy, Suspense } from 'react';

const Page1m28oqc = lazy(() => import('./Page'));

const LazyPage1m28oqc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m28oqc />
  </Suspense>
);

export { LazyPage1m28oqc };
