import React, { lazy, Suspense } from 'react';

const Page1m3792k = lazy(() => import('./Page'));

const LazyPage1m3792k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3792k />
  </Suspense>
);

export { LazyPage1m3792k };
