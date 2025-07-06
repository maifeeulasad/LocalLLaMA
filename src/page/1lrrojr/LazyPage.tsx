import React, { lazy, Suspense } from 'react';

const Page1lrrojr = lazy(() => import('./Page'));

const LazyPage1lrrojr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrrojr />
  </Suspense>
);

export { LazyPage1lrrojr };
