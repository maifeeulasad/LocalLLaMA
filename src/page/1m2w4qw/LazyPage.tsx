import React, { lazy, Suspense } from 'react';

const Page1m2w4qw = lazy(() => import('./Page'));

const LazyPage1m2w4qw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2w4qw />
  </Suspense>
);

export { LazyPage1m2w4qw };
