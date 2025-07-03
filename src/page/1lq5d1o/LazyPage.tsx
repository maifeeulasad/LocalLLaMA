import React, { lazy, Suspense } from 'react';

const Page1lq5d1o = lazy(() => import('./Page'));

const LazyPage1lq5d1o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq5d1o />
  </Suspense>
);

export { LazyPage1lq5d1o };
