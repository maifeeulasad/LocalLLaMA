import React, { lazy, Suspense } from 'react';

const Page1m1as5s = lazy(() => import('./Page'));

const LazyPage1m1as5s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1as5s />
  </Suspense>
);

export { LazyPage1m1as5s };
