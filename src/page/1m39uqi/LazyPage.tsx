import React, { lazy, Suspense } from 'react';

const Page1m39uqi = lazy(() => import('./Page'));

const LazyPage1m39uqi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m39uqi />
  </Suspense>
);

export { LazyPage1m39uqi };
