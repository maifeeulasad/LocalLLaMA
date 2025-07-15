import React, { lazy, Suspense } from 'react';

const Page1m08bvp = lazy(() => import('./Page'));

const LazyPage1m08bvp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m08bvp />
  </Suspense>
);

export { LazyPage1m08bvp };
