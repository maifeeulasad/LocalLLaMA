import React, { lazy, Suspense } from 'react';

const Page1m16h0b = lazy(() => import('./Page'));

const LazyPage1m16h0b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m16h0b />
  </Suspense>
);

export { LazyPage1m16h0b };
