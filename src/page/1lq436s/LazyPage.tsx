import React, { lazy, Suspense } from 'react';

const Page1lq436s = lazy(() => import('./Page'));

const LazyPage1lq436s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq436s />
  </Suspense>
);

export { LazyPage1lq436s };
