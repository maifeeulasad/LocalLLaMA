import React, { lazy, Suspense } from 'react';

const Page1m6ldkd = lazy(() => import('./Page'));

const LazyPage1m6ldkd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ldkd />
  </Suspense>
);

export { LazyPage1m6ldkd };
