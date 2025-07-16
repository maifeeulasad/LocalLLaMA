import React, { lazy, Suspense } from 'react';

const Page1m0rk8t = lazy(() => import('./Page'));

const LazyPage1m0rk8t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0rk8t />
  </Suspense>
);

export { LazyPage1m0rk8t };
