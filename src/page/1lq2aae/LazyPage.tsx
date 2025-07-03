import React, { lazy, Suspense } from 'react';

const Page1lq2aae = lazy(() => import('./Page'));

const LazyPage1lq2aae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq2aae />
  </Suspense>
);

export { LazyPage1lq2aae };
