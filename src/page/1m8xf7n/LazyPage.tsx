import React, { lazy, Suspense } from 'react';

const Page1m8xf7n = lazy(() => import('./Page'));

const LazyPage1m8xf7n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8xf7n />
  </Suspense>
);

export { LazyPage1m8xf7n };
