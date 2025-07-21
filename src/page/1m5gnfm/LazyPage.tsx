import React, { lazy, Suspense } from 'react';

const Page1m5gnfm = lazy(() => import('./Page'));

const LazyPage1m5gnfm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5gnfm />
  </Suspense>
);

export { LazyPage1m5gnfm };
