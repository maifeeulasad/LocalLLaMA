import React, { lazy, Suspense } from 'react';

const Page1m31n2o = lazy(() => import('./Page'));

const LazyPage1m31n2o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m31n2o />
  </Suspense>
);

export { LazyPage1m31n2o };
