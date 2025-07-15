import React, { lazy, Suspense } from 'react';

const Page1m0fboi = lazy(() => import('./Page'));

const LazyPage1m0fboi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0fboi />
  </Suspense>
);

export { LazyPage1m0fboi };
