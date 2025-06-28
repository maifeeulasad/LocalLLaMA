import React, { lazy, Suspense } from 'react';

const Page1lln5uj = lazy(() => import('./Page'));

const LazyPage1lln5uj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lln5uj />
  </Suspense>
);

export { LazyPage1lln5uj };
