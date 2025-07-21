import React, { lazy, Suspense } from 'react';

const Page1m5djms = lazy(() => import('./Page'));

const LazyPage1m5djms = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5djms />
  </Suspense>
);

export { LazyPage1m5djms };
