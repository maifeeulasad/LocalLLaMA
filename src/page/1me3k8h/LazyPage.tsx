import React, { lazy, Suspense } from 'react';

const Page1me3k8h = lazy(() => import('./Page'));

const LazyPage1me3k8h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3k8h />
  </Suspense>
);

export { LazyPage1me3k8h };
