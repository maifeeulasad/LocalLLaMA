import React, { lazy, Suspense } from 'react';

const Page1ltdrkm = lazy(() => import('./Page'));

const LazyPage1ltdrkm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltdrkm />
  </Suspense>
);

export { LazyPage1ltdrkm };
