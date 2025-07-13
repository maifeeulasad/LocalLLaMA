import React, { lazy, Suspense } from 'react';

const Page1ly476r = lazy(() => import('./Page'));

const LazyPage1ly476r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly476r />
  </Suspense>
);

export { LazyPage1ly476r };
