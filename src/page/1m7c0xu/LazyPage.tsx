import React, { lazy, Suspense } from 'react';

const Page1m7c0xu = lazy(() => import('./Page'));

const LazyPage1m7c0xu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7c0xu />
  </Suspense>
);

export { LazyPage1m7c0xu };
