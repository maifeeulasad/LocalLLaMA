import React, { lazy, Suspense } from 'react';

const Page1lqtxdp = lazy(() => import('./Page'));

const LazyPage1lqtxdp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqtxdp />
  </Suspense>
);

export { LazyPage1lqtxdp };
