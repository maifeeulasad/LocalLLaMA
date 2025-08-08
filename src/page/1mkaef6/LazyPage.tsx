import React, { lazy, Suspense } from 'react';

const Page1mkaef6 = lazy(() => import('./Page'));

const LazyPage1mkaef6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkaef6 />
  </Suspense>
);

export { LazyPage1mkaef6 };
