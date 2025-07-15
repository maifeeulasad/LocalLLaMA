import React, { lazy, Suspense } from 'react';

const Page1m0cnzs = lazy(() => import('./Page'));

const LazyPage1m0cnzs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0cnzs />
  </Suspense>
);

export { LazyPage1m0cnzs };
