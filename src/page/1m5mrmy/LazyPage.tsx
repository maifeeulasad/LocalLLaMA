import React, { lazy, Suspense } from 'react';

const Page1m5mrmy = lazy(() => import('./Page'));

const LazyPage1m5mrmy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5mrmy />
  </Suspense>
);

export { LazyPage1m5mrmy };
