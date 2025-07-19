import React, { lazy, Suspense } from 'react';

const Page1m3osbo = lazy(() => import('./Page'));

const LazyPage1m3osbo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3osbo />
  </Suspense>
);

export { LazyPage1m3osbo };
