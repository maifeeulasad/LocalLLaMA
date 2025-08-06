import React, { lazy, Suspense } from 'react';

const Page1mijcv7 = lazy(() => import('./Page'));

const LazyPage1mijcv7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijcv7 />
  </Suspense>
);

export { LazyPage1mijcv7 };
