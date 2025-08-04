import React, { lazy, Suspense } from 'react';

const Page1mgl1qz = lazy(() => import('./Page'));

const LazyPage1mgl1qz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgl1qz />
  </Suspense>
);

export { LazyPage1mgl1qz };
