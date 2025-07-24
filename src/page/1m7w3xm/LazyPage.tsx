import React, { lazy, Suspense } from 'react';

const Page1m7w3xm = lazy(() => import('./Page'));

const LazyPage1m7w3xm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7w3xm />
  </Suspense>
);

export { LazyPage1m7w3xm };
