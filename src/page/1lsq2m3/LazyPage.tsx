import React, { lazy, Suspense } from 'react';

const Page1lsq2m3 = lazy(() => import('./Page'));

const LazyPage1lsq2m3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsq2m3 />
  </Suspense>
);

export { LazyPage1lsq2m3 };
