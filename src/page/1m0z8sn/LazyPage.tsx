import React, { lazy, Suspense } from 'react';

const Page1m0z8sn = lazy(() => import('./Page'));

const LazyPage1m0z8sn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0z8sn />
  </Suspense>
);

export { LazyPage1m0z8sn };
