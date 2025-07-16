import React, { lazy, Suspense } from 'react';

const Page1m118is = lazy(() => import('./Page'));

const LazyPage1m118is = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m118is />
  </Suspense>
);

export { LazyPage1m118is };
