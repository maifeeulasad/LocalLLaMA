import React, { lazy, Suspense } from 'react';

const Page1mg24nd = lazy(() => import('./Page'));

const LazyPage1mg24nd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg24nd />
  </Suspense>
);

export { LazyPage1mg24nd };
