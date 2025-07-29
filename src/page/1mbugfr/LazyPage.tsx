import React, { lazy, Suspense } from 'react';

const Page1mbugfr = lazy(() => import('./Page'));

const LazyPage1mbugfr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbugfr />
  </Suspense>
);

export { LazyPage1mbugfr };
