import React, { lazy, Suspense } from 'react';

const Page1lp8e8m = lazy(() => import('./Page'));

const LazyPage1lp8e8m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp8e8m />
  </Suspense>
);

export { LazyPage1lp8e8m };
