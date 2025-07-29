import React, { lazy, Suspense } from 'react';

const Page1mc644b = lazy(() => import('./Page'));

const LazyPage1mc644b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc644b />
  </Suspense>
);

export { LazyPage1mc644b };
