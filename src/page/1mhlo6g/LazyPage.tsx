import React, { lazy, Suspense } from 'react';

const Page1mhlo6g = lazy(() => import('./Page'));

const LazyPage1mhlo6g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhlo6g />
  </Suspense>
);

export { LazyPage1mhlo6g };
