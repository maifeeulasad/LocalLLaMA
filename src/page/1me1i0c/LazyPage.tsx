import React, { lazy, Suspense } from 'react';

const Page1me1i0c = lazy(() => import('./Page'));

const LazyPage1me1i0c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me1i0c />
  </Suspense>
);

export { LazyPage1me1i0c };
