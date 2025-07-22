import React, { lazy, Suspense } from 'react';

const Page1m5jr1v = lazy(() => import('./Page'));

const LazyPage1m5jr1v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5jr1v />
  </Suspense>
);

export { LazyPage1m5jr1v };
