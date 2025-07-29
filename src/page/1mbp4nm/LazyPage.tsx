import React, { lazy, Suspense } from 'react';

const Page1mbp4nm = lazy(() => import('./Page'));

const LazyPage1mbp4nm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbp4nm />
  </Suspense>
);

export { LazyPage1mbp4nm };
