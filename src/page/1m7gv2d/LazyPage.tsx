import React, { lazy, Suspense } from 'react';

const Page1m7gv2d = lazy(() => import('./Page'));

const LazyPage1m7gv2d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7gv2d />
  </Suspense>
);

export { LazyPage1m7gv2d };
