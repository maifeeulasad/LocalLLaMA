import React, { lazy, Suspense } from 'react';

const Page1lrs917 = lazy(() => import('./Page'));

const LazyPage1lrs917 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrs917 />
  </Suspense>
);

export { LazyPage1lrs917 };
