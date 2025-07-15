import React, { lazy, Suspense } from 'react';

const Page1m0drwa = lazy(() => import('./Page'));

const LazyPage1m0drwa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0drwa />
  </Suspense>
);

export { LazyPage1m0drwa };
