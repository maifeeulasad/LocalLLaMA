import React, { lazy, Suspense } from 'react';

const Page1mcq1cs = lazy(() => import('./Page'));

const LazyPage1mcq1cs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcq1cs />
  </Suspense>
);

export { LazyPage1mcq1cs };
