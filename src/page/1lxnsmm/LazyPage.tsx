import React, { lazy, Suspense } from 'react';

const Page1lxnsmm = lazy(() => import('./Page'));

const LazyPage1lxnsmm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxnsmm />
  </Suspense>
);

export { LazyPage1lxnsmm };
