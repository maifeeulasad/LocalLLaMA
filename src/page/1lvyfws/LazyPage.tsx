import React, { lazy, Suspense } from 'react';

const Page1lvyfws = lazy(() => import('./Page'));

const LazyPage1lvyfws = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvyfws />
  </Suspense>
);

export { LazyPage1lvyfws };
