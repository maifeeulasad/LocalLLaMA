import React, { lazy, Suspense } from 'react';

const Page1mbe7ua = lazy(() => import('./Page'));

const LazyPage1mbe7ua = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbe7ua />
  </Suspense>
);

export { LazyPage1mbe7ua };
