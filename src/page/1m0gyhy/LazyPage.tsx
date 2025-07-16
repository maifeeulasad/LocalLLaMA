import React, { lazy, Suspense } from 'react';

const Page1m0gyhy = lazy(() => import('./Page'));

const LazyPage1m0gyhy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0gyhy />
  </Suspense>
);

export { LazyPage1m0gyhy };
