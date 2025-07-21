import React, { lazy, Suspense } from 'react';

const Page1m5bccx = lazy(() => import('./Page'));

const LazyPage1m5bccx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5bccx />
  </Suspense>
);

export { LazyPage1m5bccx };
