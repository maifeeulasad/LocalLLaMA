import React, { lazy, Suspense } from 'react';

const Page1lyy4k8 = lazy(() => import('./Page'));

const LazyPage1lyy4k8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyy4k8 />
  </Suspense>
);

export { LazyPage1lyy4k8 };
