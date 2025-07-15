import React, { lazy, Suspense } from 'react';

const Page1m086sk = lazy(() => import('./Page'));

const LazyPage1m086sk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m086sk />
  </Suspense>
);

export { LazyPage1m086sk };
