import React, { lazy, Suspense } from 'react';

const Page1lmmh3l = lazy(() => import('./Page'));

const LazyPage1lmmh3l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmmh3l />
  </Suspense>
);

export { LazyPage1lmmh3l };
