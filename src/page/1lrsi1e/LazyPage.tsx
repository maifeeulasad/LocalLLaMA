import React, { lazy, Suspense } from 'react';

const Page1lrsi1e = lazy(() => import('./Page'));

const LazyPage1lrsi1e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrsi1e />
  </Suspense>
);

export { LazyPage1lrsi1e };
