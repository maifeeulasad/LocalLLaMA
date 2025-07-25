import React, { lazy, Suspense } from 'react';

const Page1m85nxe = lazy(() => import('./Page'));

const LazyPage1m85nxe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m85nxe />
  </Suspense>
);

export { LazyPage1m85nxe };
