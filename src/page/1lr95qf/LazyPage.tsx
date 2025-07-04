import React, { lazy, Suspense } from 'react';

const Page1lr95qf = lazy(() => import('./Page'));

const LazyPage1lr95qf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr95qf />
  </Suspense>
);

export { LazyPage1lr95qf };
