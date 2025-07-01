import React, { lazy, Suspense } from 'react';

const Page1lomilz = lazy(() => import('./Page'));

const LazyPage1lomilz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lomilz />
  </Suspense>
);

export { LazyPage1lomilz };
