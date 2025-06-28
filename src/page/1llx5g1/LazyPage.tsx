import React, { lazy, Suspense } from 'react';

const Page1llx5g1 = lazy(() => import('./Page'));

const LazyPage1llx5g1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llx5g1 />
  </Suspense>
);

export { LazyPage1llx5g1 };
