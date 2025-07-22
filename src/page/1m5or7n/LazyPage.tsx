import React, { lazy, Suspense } from 'react';

const Page1m5or7n = lazy(() => import('./Page'));

const LazyPage1m5or7n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5or7n />
  </Suspense>
);

export { LazyPage1m5or7n };
