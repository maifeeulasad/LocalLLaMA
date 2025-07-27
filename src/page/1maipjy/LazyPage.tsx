import React, { lazy, Suspense } from 'react';

const Page1maipjy = lazy(() => import('./Page'));

const LazyPage1maipjy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maipjy />
  </Suspense>
);

export { LazyPage1maipjy };
