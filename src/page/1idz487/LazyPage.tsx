import React, { lazy, Suspense } from 'react';

const Page1idz487 = lazy(() => import('./Page'));

const LazyPage1idz487 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1idz487 />
  </Suspense>
);

export { LazyPage1idz487 };
