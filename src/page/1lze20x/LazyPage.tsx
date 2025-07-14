import React, { lazy, Suspense } from 'react';

const Page1lze20x = lazy(() => import('./Page'));

const LazyPage1lze20x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lze20x />
  </Suspense>
);

export { LazyPage1lze20x };
