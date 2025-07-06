import React, { lazy, Suspense } from 'react';

const Page1lsvff1 = lazy(() => import('./Page'));

const LazyPage1lsvff1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsvff1 />
  </Suspense>
);

export { LazyPage1lsvff1 };
