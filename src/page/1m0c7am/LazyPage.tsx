import React, { lazy, Suspense } from 'react';

const Page1m0c7am = lazy(() => import('./Page'));

const LazyPage1m0c7am = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0c7am />
  </Suspense>
);

export { LazyPage1m0c7am };
