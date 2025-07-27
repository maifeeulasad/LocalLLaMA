import React, { lazy, Suspense } from 'react';

const Page1ma2r4d = lazy(() => import('./Page'));

const LazyPage1ma2r4d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma2r4d />
  </Suspense>
);

export { LazyPage1ma2r4d };
