import React, { lazy, Suspense } from 'react';

const Page1m4zx8s = lazy(() => import('./Page'));

const LazyPage1m4zx8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4zx8s />
  </Suspense>
);

export { LazyPage1m4zx8s };
