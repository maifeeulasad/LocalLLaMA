import React, { lazy, Suspense } from 'react';

const Page1m23efn = lazy(() => import('./Page'));

const LazyPage1m23efn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m23efn />
  </Suspense>
);

export { LazyPage1m23efn };
