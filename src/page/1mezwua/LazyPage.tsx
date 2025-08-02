import React, { lazy, Suspense } from 'react';

const Page1mezwua = lazy(() => import('./Page'));

const LazyPage1mezwua = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mezwua />
  </Suspense>
);

export { LazyPage1mezwua };
