import React, { lazy, Suspense } from 'react';

const Page1m95wcg = lazy(() => import('./Page'));

const LazyPage1m95wcg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m95wcg />
  </Suspense>
);

export { LazyPage1m95wcg };
