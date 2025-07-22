import React, { lazy, Suspense } from 'react';

const Page1m5ndsf = lazy(() => import('./Page'));

const LazyPage1m5ndsf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ndsf />
  </Suspense>
);

export { LazyPage1m5ndsf };
