import React, { lazy, Suspense } from 'react';

const Page1lo5vnf = lazy(() => import('./Page'));

const LazyPage1lo5vnf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo5vnf />
  </Suspense>
);

export { LazyPage1lo5vnf };
