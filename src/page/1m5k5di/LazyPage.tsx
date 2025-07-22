import React, { lazy, Suspense } from 'react';

const Page1m5k5di = lazy(() => import('./Page'));

const LazyPage1m5k5di = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5k5di />
  </Suspense>
);

export { LazyPage1m5k5di };
