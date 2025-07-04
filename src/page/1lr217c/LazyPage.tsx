import React, { lazy, Suspense } from 'react';

const Page1lr217c = lazy(() => import('./Page'));

const LazyPage1lr217c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr217c />
  </Suspense>
);

export { LazyPage1lr217c };
