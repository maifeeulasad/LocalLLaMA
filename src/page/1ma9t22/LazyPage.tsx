import React, { lazy, Suspense } from 'react';

const Page1ma9t22 = lazy(() => import('./Page'));

const LazyPage1ma9t22 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma9t22 />
  </Suspense>
);

export { LazyPage1ma9t22 };
