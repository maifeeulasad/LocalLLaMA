import React, { lazy, Suspense } from 'react';

const Page1lymewq = lazy(() => import('./Page'));

const LazyPage1lymewq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lymewq />
  </Suspense>
);

export { LazyPage1lymewq };
