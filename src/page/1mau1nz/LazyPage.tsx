import React, { lazy, Suspense } from 'react';

const Page1mau1nz = lazy(() => import('./Page'));

const LazyPage1mau1nz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mau1nz />
  </Suspense>
);

export { LazyPage1mau1nz };
