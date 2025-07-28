import React, { lazy, Suspense } from 'react';

const Page1mazi8m = lazy(() => import('./Page'));

const LazyPage1mazi8m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mazi8m />
  </Suspense>
);

export { LazyPage1mazi8m };
