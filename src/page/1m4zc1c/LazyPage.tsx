import React, { lazy, Suspense } from 'react';

const Page1m4zc1c = lazy(() => import('./Page'));

const LazyPage1m4zc1c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4zc1c />
  </Suspense>
);

export { LazyPage1m4zc1c };
