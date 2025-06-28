import React, { lazy, Suspense } from 'react';

const Page1jj6i4m = lazy(() => import('./Page'));

const LazyPage1jj6i4m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jj6i4m />
  </Suspense>
);

export { LazyPage1jj6i4m };
