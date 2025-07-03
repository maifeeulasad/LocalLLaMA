import React, { lazy, Suspense } from 'react';

const Page1lqcbfp = lazy(() => import('./Page'));

const LazyPage1lqcbfp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqcbfp />
  </Suspense>
);

export { LazyPage1lqcbfp };
