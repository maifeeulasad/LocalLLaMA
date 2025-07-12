import React, { lazy, Suspense } from 'react';

const Page1lxvrjm = lazy(() => import('./Page'));

const LazyPage1lxvrjm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxvrjm />
  </Suspense>
);

export { LazyPage1lxvrjm };
