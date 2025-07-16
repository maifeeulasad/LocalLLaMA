import React, { lazy, Suspense } from 'react';

const Page1m1au28 = lazy(() => import('./Page'));

const LazyPage1m1au28 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1au28 />
  </Suspense>
);

export { LazyPage1m1au28 };
