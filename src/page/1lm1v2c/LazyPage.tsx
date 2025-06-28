import React, { lazy, Suspense } from 'react';

const Page1lm1v2c = lazy(() => import('./Page'));

const LazyPage1lm1v2c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm1v2c />
  </Suspense>
);

export { LazyPage1lm1v2c };
