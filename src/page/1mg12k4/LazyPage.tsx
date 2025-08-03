import React, { lazy, Suspense } from 'react';

const Page1mg12k4 = lazy(() => import('./Page'));

const LazyPage1mg12k4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg12k4 />
  </Suspense>
);

export { LazyPage1mg12k4 };
