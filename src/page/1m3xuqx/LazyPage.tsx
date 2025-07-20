import React, { lazy, Suspense } from 'react';

const Page1m3xuqx = lazy(() => import('./Page'));

const LazyPage1m3xuqx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3xuqx />
  </Suspense>
);

export { LazyPage1m3xuqx };
