import React, { lazy, Suspense } from 'react';

const Page1lrvlsx = lazy(() => import('./Page'));

const LazyPage1lrvlsx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrvlsx />
  </Suspense>
);

export { LazyPage1lrvlsx };
