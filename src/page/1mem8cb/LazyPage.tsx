import React, { lazy, Suspense } from 'react';

const Page1mem8cb = lazy(() => import('./Page'));

const LazyPage1mem8cb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mem8cb />
  </Suspense>
);

export { LazyPage1mem8cb };
