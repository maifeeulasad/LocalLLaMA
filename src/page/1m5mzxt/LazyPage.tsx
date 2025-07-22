import React, { lazy, Suspense } from 'react';

const Page1m5mzxt = lazy(() => import('./Page'));

const LazyPage1m5mzxt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5mzxt />
  </Suspense>
);

export { LazyPage1m5mzxt };
