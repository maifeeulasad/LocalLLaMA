import React, { lazy, Suspense } from 'react';

const Page1lxy8xz = lazy(() => import('./Page'));

const LazyPage1lxy8xz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxy8xz />
  </Suspense>
);

export { LazyPage1lxy8xz };
