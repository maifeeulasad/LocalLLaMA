import React, { lazy, Suspense } from 'react';

const Page1m0v9m1 = lazy(() => import('./Page'));

const LazyPage1m0v9m1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0v9m1 />
  </Suspense>
);

export { LazyPage1m0v9m1 };
