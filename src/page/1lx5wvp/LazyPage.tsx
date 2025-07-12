import React, { lazy, Suspense } from 'react';

const Page1lx5wvp = lazy(() => import('./Page'));

const LazyPage1lx5wvp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx5wvp />
  </Suspense>
);

export { LazyPage1lx5wvp };
