import React, { lazy, Suspense } from 'react';

const Page1m95bfq = lazy(() => import('./Page'));

const LazyPage1m95bfq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m95bfq />
  </Suspense>
);

export { LazyPage1m95bfq };
