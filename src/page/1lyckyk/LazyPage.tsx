import React, { lazy, Suspense } from 'react';

const Page1lyckyk = lazy(() => import('./Page'));

const LazyPage1lyckyk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyckyk />
  </Suspense>
);

export { LazyPage1lyckyk };
