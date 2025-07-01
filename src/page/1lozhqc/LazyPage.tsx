import React, { lazy, Suspense } from 'react';

const Page1lozhqc = lazy(() => import('./Page'));

const LazyPage1lozhqc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lozhqc />
  </Suspense>
);

export { LazyPage1lozhqc };
