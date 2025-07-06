import React, { lazy, Suspense } from 'react';

const Page1ls5pbt = lazy(() => import('./Page'));

const LazyPage1ls5pbt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls5pbt />
  </Suspense>
);

export { LazyPage1ls5pbt };
