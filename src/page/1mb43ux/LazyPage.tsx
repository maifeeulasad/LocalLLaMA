import React, { lazy, Suspense } from 'react';

const Page1mb43ux = lazy(() => import('./Page'));

const LazyPage1mb43ux = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb43ux />
  </Suspense>
);

export { LazyPage1mb43ux };
