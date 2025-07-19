import React, { lazy, Suspense } from 'react';

const Page1m3amtu = lazy(() => import('./Page'));

const LazyPage1m3amtu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3amtu />
  </Suspense>
);

export { LazyPage1m3amtu };
