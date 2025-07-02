import React, { lazy, Suspense } from 'react';

const Page1lpm1k8 = lazy(() => import('./Page'));

const LazyPage1lpm1k8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpm1k8 />
  </Suspense>
);

export { LazyPage1lpm1k8 };
