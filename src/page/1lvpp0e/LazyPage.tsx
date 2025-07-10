import React, { lazy, Suspense } from 'react';

const Page1lvpp0e = lazy(() => import('./Page'));

const LazyPage1lvpp0e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvpp0e />
  </Suspense>
);

export { LazyPage1lvpp0e };
