import React, { lazy, Suspense } from 'react';

const Page1loiwzz = lazy(() => import('./Page'));

const LazyPage1loiwzz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loiwzz />
  </Suspense>
);

export { LazyPage1loiwzz };
