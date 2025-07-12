import React, { lazy, Suspense } from 'react';

const Page1lx8qrz = lazy(() => import('./Page'));

const LazyPage1lx8qrz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx8qrz />
  </Suspense>
);

export { LazyPage1lx8qrz };
