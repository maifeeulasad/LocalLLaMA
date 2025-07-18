import React, { lazy, Suspense } from 'react';

const Page1m2tjjc = lazy(() => import('./Page'));

const LazyPage1m2tjjc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2tjjc />
  </Suspense>
);

export { LazyPage1m2tjjc };
