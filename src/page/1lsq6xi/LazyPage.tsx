import React, { lazy, Suspense } from 'react';

const Page1lsq6xi = lazy(() => import('./Page'));

const LazyPage1lsq6xi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsq6xi />
  </Suspense>
);

export { LazyPage1lsq6xi };
