import React, { lazy, Suspense } from 'react';

const Page1m2spkm = lazy(() => import('./Page'));

const LazyPage1m2spkm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2spkm />
  </Suspense>
);

export { LazyPage1m2spkm };
