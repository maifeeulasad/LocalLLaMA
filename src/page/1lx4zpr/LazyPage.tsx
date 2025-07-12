import React, { lazy, Suspense } from 'react';

const Page1lx4zpr = lazy(() => import('./Page'));

const LazyPage1lx4zpr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4zpr />
  </Suspense>
);

export { LazyPage1lx4zpr };
