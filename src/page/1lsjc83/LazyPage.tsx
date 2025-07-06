import React, { lazy, Suspense } from 'react';

const Page1lsjc83 = lazy(() => import('./Page'));

const LazyPage1lsjc83 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsjc83 />
  </Suspense>
);

export { LazyPage1lsjc83 };
