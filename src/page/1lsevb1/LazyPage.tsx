import React, { lazy, Suspense } from 'react';

const Page1lsevb1 = lazy(() => import('./Page'));

const LazyPage1lsevb1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsevb1 />
  </Suspense>
);

export { LazyPage1lsevb1 };
