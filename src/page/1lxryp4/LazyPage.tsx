import React, { lazy, Suspense } from 'react';

const Page1lxryp4 = lazy(() => import('./Page'));

const LazyPage1lxryp4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxryp4 />
  </Suspense>
);

export { LazyPage1lxryp4 };
