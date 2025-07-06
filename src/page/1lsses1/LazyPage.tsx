import React, { lazy, Suspense } from 'react';

const Page1lsses1 = lazy(() => import('./Page'));

const LazyPage1lsses1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsses1 />
  </Suspense>
);

export { LazyPage1lsses1 };
