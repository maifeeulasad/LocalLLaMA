import React, { lazy, Suspense } from 'react';

const Page1mbdqby = lazy(() => import('./Page'));

const LazyPage1mbdqby = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdqby />
  </Suspense>
);

export { LazyPage1mbdqby };
