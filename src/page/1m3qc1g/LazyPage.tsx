import React, { lazy, Suspense } from 'react';

const Page1m3qc1g = lazy(() => import('./Page'));

const LazyPage1m3qc1g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3qc1g />
  </Suspense>
);

export { LazyPage1m3qc1g };
