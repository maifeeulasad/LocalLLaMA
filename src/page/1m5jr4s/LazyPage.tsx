import React, { lazy, Suspense } from 'react';

const Page1m5jr4s = lazy(() => import('./Page'));

const LazyPage1m5jr4s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5jr4s />
  </Suspense>
);

export { LazyPage1m5jr4s };
