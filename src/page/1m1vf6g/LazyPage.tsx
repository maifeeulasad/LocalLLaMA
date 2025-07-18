import React, { lazy, Suspense } from 'react';

const Page1m1vf6g = lazy(() => import('./Page'));

const LazyPage1m1vf6g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1vf6g />
  </Suspense>
);

export { LazyPage1m1vf6g };
