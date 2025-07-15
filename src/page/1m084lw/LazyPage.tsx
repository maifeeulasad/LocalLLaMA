import React, { lazy, Suspense } from 'react';

const Page1m084lw = lazy(() => import('./Page'));

const LazyPage1m084lw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m084lw />
  </Suspense>
);

export { LazyPage1m084lw };
