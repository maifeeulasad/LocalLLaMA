import React, { lazy, Suspense } from 'react';

const Page1m0mo2d = lazy(() => import('./Page'));

const LazyPage1m0mo2d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0mo2d />
  </Suspense>
);

export { LazyPage1m0mo2d };
