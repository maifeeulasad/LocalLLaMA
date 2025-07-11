import React, { lazy, Suspense } from 'react';

const Page1lwe0gn = lazy(() => import('./Page'));

const LazyPage1lwe0gn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwe0gn />
  </Suspense>
);

export { LazyPage1lwe0gn };
