import React, { lazy, Suspense } from 'react';

const Page1m2hedt = lazy(() => import('./Page'));

const LazyPage1m2hedt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2hedt />
  </Suspense>
);

export { LazyPage1m2hedt };
