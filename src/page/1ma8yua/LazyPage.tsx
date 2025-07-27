import React, { lazy, Suspense } from 'react';

const Page1ma8yua = lazy(() => import('./Page'));

const LazyPage1ma8yua = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma8yua />
  </Suspense>
);

export { LazyPage1ma8yua };
