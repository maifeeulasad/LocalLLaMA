import React, { lazy, Suspense } from 'react';

const Page1mkb1sj = lazy(() => import('./Page'));

const LazyPage1mkb1sj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkb1sj />
  </Suspense>
);

export { LazyPage1mkb1sj };
