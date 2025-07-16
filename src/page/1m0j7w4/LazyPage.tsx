import React, { lazy, Suspense } from 'react';

const Page1m0j7w4 = lazy(() => import('./Page'));

const LazyPage1m0j7w4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0j7w4 />
  </Suspense>
);

export { LazyPage1m0j7w4 };
