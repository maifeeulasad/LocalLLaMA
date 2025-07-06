import React, { lazy, Suspense } from 'react';

const Page1lrpjpc = lazy(() => import('./Page'));

const LazyPage1lrpjpc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrpjpc />
  </Suspense>
);

export { LazyPage1lrpjpc };
