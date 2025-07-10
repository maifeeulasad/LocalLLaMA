import React, { lazy, Suspense } from 'react';

const Page1lw12gt = lazy(() => import('./Page'));

const LazyPage1lw12gt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw12gt />
  </Suspense>
);

export { LazyPage1lw12gt };
