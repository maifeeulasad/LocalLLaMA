import React, { lazy, Suspense } from 'react';

const Page1mbdl2y = lazy(() => import('./Page'));

const LazyPage1mbdl2y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdl2y />
  </Suspense>
);

export { LazyPage1mbdl2y };
