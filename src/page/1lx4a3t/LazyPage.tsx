import React, { lazy, Suspense } from 'react';

const Page1lx4a3t = lazy(() => import('./Page'));

const LazyPage1lx4a3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4a3t />
  </Suspense>
);

export { LazyPage1lx4a3t };
