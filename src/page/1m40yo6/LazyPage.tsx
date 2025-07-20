import React, { lazy, Suspense } from 'react';

const Page1m40yo6 = lazy(() => import('./Page'));

const LazyPage1m40yo6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m40yo6 />
  </Suspense>
);

export { LazyPage1m40yo6 };
