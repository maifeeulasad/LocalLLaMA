import React, { lazy, Suspense } from 'react';

const Page1m7fwhl = lazy(() => import('./Page'));

const LazyPage1m7fwhl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7fwhl />
  </Suspense>
);

export { LazyPage1m7fwhl };
