import React, { lazy, Suspense } from 'react';

const Page1mc9o4m = lazy(() => import('./Page'));

const LazyPage1mc9o4m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc9o4m />
  </Suspense>
);

export { LazyPage1mc9o4m };
