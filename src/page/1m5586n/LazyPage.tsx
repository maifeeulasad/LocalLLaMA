import React, { lazy, Suspense } from 'react';

const Page1m5586n = lazy(() => import('./Page'));

const LazyPage1m5586n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5586n />
  </Suspense>
);

export { LazyPage1m5586n };
