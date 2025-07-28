import React, { lazy, Suspense } from 'react';

const Page1map5pe = lazy(() => import('./Page'));

const LazyPage1map5pe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1map5pe />
  </Suspense>
);

export { LazyPage1map5pe };
