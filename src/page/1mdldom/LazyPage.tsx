import React, { lazy, Suspense } from 'react';

const Page1mdldom = lazy(() => import('./Page'));

const LazyPage1mdldom = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdldom />
  </Suspense>
);

export { LazyPage1mdldom };
