import React, { lazy, Suspense } from 'react';

const Page1m1a4z7 = lazy(() => import('./Page'));

const LazyPage1m1a4z7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1a4z7 />
  </Suspense>
);

export { LazyPage1m1a4z7 };
