import React, { lazy, Suspense } from 'react';

const Page1m92vqp = lazy(() => import('./Page'));

const LazyPage1m92vqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m92vqp />
  </Suspense>
);

export { LazyPage1m92vqp };
