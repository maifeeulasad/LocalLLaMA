import React, { lazy, Suspense } from 'react';

const Page1luz92k = lazy(() => import('./Page'));

const LazyPage1luz92k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luz92k />
  </Suspense>
);

export { LazyPage1luz92k };
