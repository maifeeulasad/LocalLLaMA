import React, { lazy, Suspense } from 'react';

const Page1m3pg0s = lazy(() => import('./Page'));

const LazyPage1m3pg0s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3pg0s />
  </Suspense>
);

export { LazyPage1m3pg0s };
