import React, { lazy, Suspense } from 'react';

const Page1lr1ypr = lazy(() => import('./Page'));

const LazyPage1lr1ypr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr1ypr />
  </Suspense>
);

export { LazyPage1lr1ypr };
