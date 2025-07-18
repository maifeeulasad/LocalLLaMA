import React, { lazy, Suspense } from 'react';

const Page1m2zj5b = lazy(() => import('./Page'));

const LazyPage1m2zj5b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2zj5b />
  </Suspense>
);

export { LazyPage1m2zj5b };
