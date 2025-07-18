import React, { lazy, Suspense } from 'react';

const Page1m2lq3q = lazy(() => import('./Page'));

const LazyPage1m2lq3q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2lq3q />
  </Suspense>
);

export { LazyPage1m2lq3q };
