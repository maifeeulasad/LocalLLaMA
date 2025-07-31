import React, { lazy, Suspense } from 'react';

const Page1mdq2vw = lazy(() => import('./Page'));

const LazyPage1mdq2vw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdq2vw />
  </Suspense>
);

export { LazyPage1mdq2vw };
