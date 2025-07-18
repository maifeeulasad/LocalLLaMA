import React, { lazy, Suspense } from 'react';

const Page1m2w1ez = lazy(() => import('./Page'));

const LazyPage1m2w1ez = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2w1ez />
  </Suspense>
);

export { LazyPage1m2w1ez };
