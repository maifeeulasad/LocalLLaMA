import React, { lazy, Suspense } from 'react';

const Page1lx4hxt = lazy(() => import('./Page'));

const LazyPage1lx4hxt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4hxt />
  </Suspense>
);

export { LazyPage1lx4hxt };
