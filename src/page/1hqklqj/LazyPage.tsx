import React, { lazy, Suspense } from 'react';

const Page1hqklqj = lazy(() => import('./Page'));

const LazyPage1hqklqj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hqklqj />
  </Suspense>
);

export { LazyPage1hqklqj };
