import React, { lazy, Suspense } from 'react';

const Page1mffjjj = lazy(() => import('./Page'));

const LazyPage1mffjjj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mffjjj />
  </Suspense>
);

export { LazyPage1mffjjj };
