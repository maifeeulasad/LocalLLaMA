import React, { lazy, Suspense } from 'react';

const Page1m93u0b = lazy(() => import('./Page'));

const LazyPage1m93u0b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m93u0b />
  </Suspense>
);

export { LazyPage1m93u0b };
