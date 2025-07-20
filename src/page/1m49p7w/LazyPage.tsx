import React, { lazy, Suspense } from 'react';

const Page1m49p7w = lazy(() => import('./Page'));

const LazyPage1m49p7w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m49p7w />
  </Suspense>
);

export { LazyPage1m49p7w };
