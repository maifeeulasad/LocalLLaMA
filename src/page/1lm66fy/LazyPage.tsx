import React, { lazy, Suspense } from 'react';

const Page1lm66fy = lazy(() => import('./Page'));

const LazyPage1lm66fy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm66fy />
  </Suspense>
);

export { LazyPage1lm66fy };
