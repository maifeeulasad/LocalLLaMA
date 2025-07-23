import React, { lazy, Suspense } from 'react';

const Page1m6xt2d = lazy(() => import('./Page'));

const LazyPage1m6xt2d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6xt2d />
  </Suspense>
);

export { LazyPage1m6xt2d };
