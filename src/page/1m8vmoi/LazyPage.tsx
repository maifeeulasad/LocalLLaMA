import React, { lazy, Suspense } from 'react';

const Page1m8vmoi = lazy(() => import('./Page'));

const LazyPage1m8vmoi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vmoi />
  </Suspense>
);

export { LazyPage1m8vmoi };
