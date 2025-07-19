import React, { lazy, Suspense } from 'react';

const Page1m3ssb2 = lazy(() => import('./Page'));

const LazyPage1m3ssb2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3ssb2 />
  </Suspense>
);

export { LazyPage1m3ssb2 };
