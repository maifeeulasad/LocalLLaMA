import React, { lazy, Suspense } from 'react';

const Page1lltmig = lazy(() => import('./Page'));

const LazyPage1lltmig = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lltmig />
  </Suspense>
);

export { LazyPage1lltmig };
