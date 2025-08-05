import React, { lazy, Suspense } from 'react';

const Page1mhg8rt = lazy(() => import('./Page'));

const LazyPage1mhg8rt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhg8rt />
  </Suspense>
);

export { LazyPage1mhg8rt };
