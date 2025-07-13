import React, { lazy, Suspense } from 'react';

const Page1ly3dk9 = lazy(() => import('./Page'));

const LazyPage1ly3dk9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly3dk9 />
  </Suspense>
);

export { LazyPage1ly3dk9 };
