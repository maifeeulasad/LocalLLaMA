import React, { lazy, Suspense } from 'react';

const Page1lx2uwr = lazy(() => import('./Page'));

const LazyPage1lx2uwr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx2uwr />
  </Suspense>
);

export { LazyPage1lx2uwr };
