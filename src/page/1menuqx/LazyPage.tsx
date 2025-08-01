import React, { lazy, Suspense } from 'react';

const Page1menuqx = lazy(() => import('./Page'));

const LazyPage1menuqx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1menuqx />
  </Suspense>
);

export { LazyPage1menuqx };
