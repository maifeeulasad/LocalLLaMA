import React, { lazy, Suspense } from 'react';

const Page1lq9lkd = lazy(() => import('./Page'));

const LazyPage1lq9lkd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq9lkd />
  </Suspense>
);

export { LazyPage1lq9lkd };
