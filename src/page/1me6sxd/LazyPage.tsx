import React, { lazy, Suspense } from 'react';

const Page1me6sxd = lazy(() => import('./Page'));

const LazyPage1me6sxd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me6sxd />
  </Suspense>
);

export { LazyPage1me6sxd };
