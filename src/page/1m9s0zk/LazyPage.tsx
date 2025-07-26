import React, { lazy, Suspense } from 'react';

const Page1m9s0zk = lazy(() => import('./Page'));

const LazyPage1m9s0zk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9s0zk />
  </Suspense>
);

export { LazyPage1m9s0zk };
