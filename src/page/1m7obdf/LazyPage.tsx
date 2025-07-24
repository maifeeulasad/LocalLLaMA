import React, { lazy, Suspense } from 'react';

const Page1m7obdf = lazy(() => import('./Page'));

const LazyPage1m7obdf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7obdf />
  </Suspense>
);

export { LazyPage1m7obdf };
