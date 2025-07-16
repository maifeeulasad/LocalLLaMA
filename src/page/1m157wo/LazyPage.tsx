import React, { lazy, Suspense } from 'react';

const Page1m157wo = lazy(() => import('./Page'));

const LazyPage1m157wo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m157wo />
  </Suspense>
);

export { LazyPage1m157wo };
