import React, { lazy, Suspense } from 'react';

const Page1m8k5x0 = lazy(() => import('./Page'));

const LazyPage1m8k5x0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8k5x0 />
  </Suspense>
);

export { LazyPage1m8k5x0 };
