import React, { lazy, Suspense } from 'react';

const Page1mfvzai = lazy(() => import('./Page'));

const LazyPage1mfvzai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfvzai />
  </Suspense>
);

export { LazyPage1mfvzai };
