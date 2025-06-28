import React, { lazy, Suspense } from 'react';

const Page1i80cwf = lazy(() => import('./Page'));

const LazyPage1i80cwf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i80cwf />
  </Suspense>
);

export { LazyPage1i80cwf };
