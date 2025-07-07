import React, { lazy, Suspense } from 'react';

const Page1ltubvs = lazy(() => import('./Page'));

const LazyPage1ltubvs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltubvs />
  </Suspense>
);

export { LazyPage1ltubvs };
