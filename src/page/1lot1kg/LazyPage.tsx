import React, { lazy, Suspense } from 'react';

const Page1lot1kg = lazy(() => import('./Page'));

const LazyPage1lot1kg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lot1kg />
  </Suspense>
);

export { LazyPage1lot1kg };
