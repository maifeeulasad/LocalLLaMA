import React, { lazy, Suspense } from 'react';

const Page1m31z4z = lazy(() => import('./Page'));

const LazyPage1m31z4z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m31z4z />
  </Suspense>
);

export { LazyPage1m31z4z };
