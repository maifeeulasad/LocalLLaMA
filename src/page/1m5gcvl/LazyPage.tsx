import React, { lazy, Suspense } from 'react';

const Page1m5gcvl = lazy(() => import('./Page'));

const LazyPage1m5gcvl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5gcvl />
  </Suspense>
);

export { LazyPage1m5gcvl };
