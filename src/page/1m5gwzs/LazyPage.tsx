import React, { lazy, Suspense } from 'react';

const Page1m5gwzs = lazy(() => import('./Page'));

const LazyPage1m5gwzs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5gwzs />
  </Suspense>
);

export { LazyPage1m5gwzs };
