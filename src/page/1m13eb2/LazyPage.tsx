import React, { lazy, Suspense } from 'react';

const Page1m13eb2 = lazy(() => import('./Page'));

const LazyPage1m13eb2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m13eb2 />
  </Suspense>
);

export { LazyPage1m13eb2 };
