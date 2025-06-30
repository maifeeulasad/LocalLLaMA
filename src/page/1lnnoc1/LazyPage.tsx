import React, { lazy, Suspense } from 'react';

const Page1lnnoc1 = lazy(() => import('./Page'));

const LazyPage1lnnoc1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnnoc1 />
  </Suspense>
);

export { LazyPage1lnnoc1 };
