import React, { lazy, Suspense } from 'react';

const Page1m2x30u = lazy(() => import('./Page'));

const LazyPage1m2x30u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2x30u />
  </Suspense>
);

export { LazyPage1m2x30u };
