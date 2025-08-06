import React, { lazy, Suspense } from 'react';

const Page1mijmmc = lazy(() => import('./Page'));

const LazyPage1mijmmc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijmmc />
  </Suspense>
);

export { LazyPage1mijmmc };
