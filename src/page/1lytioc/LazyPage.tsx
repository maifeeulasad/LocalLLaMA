import React, { lazy, Suspense } from 'react';

const Page1lytioc = lazy(() => import('./Page'));

const LazyPage1lytioc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lytioc />
  </Suspense>
);

export { LazyPage1lytioc };
