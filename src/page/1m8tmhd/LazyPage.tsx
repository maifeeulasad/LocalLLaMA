import React, { lazy, Suspense } from 'react';

const Page1m8tmhd = lazy(() => import('./Page'));

const LazyPage1m8tmhd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8tmhd />
  </Suspense>
);

export { LazyPage1m8tmhd };
