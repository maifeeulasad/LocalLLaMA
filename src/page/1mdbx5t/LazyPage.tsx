import React, { lazy, Suspense } from 'react';

const Page1mdbx5t = lazy(() => import('./Page'));

const LazyPage1mdbx5t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdbx5t />
  </Suspense>
);

export { LazyPage1mdbx5t };
