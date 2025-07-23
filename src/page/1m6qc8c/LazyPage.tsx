import React, { lazy, Suspense } from 'react';

const Page1m6qc8c = lazy(() => import('./Page'));

const LazyPage1m6qc8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qc8c />
  </Suspense>
);

export { LazyPage1m6qc8c };
