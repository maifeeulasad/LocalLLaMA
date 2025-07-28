import React, { lazy, Suspense } from 'react';

const Page1maoiae = lazy(() => import('./Page'));

const LazyPage1maoiae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maoiae />
  </Suspense>
);

export { LazyPage1maoiae };
