import React, { lazy, Suspense } from 'react';

const Page1ln1ij8 = lazy(() => import('./Page'));

const LazyPage1ln1ij8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln1ij8 />
  </Suspense>
);

export { LazyPage1ln1ij8 };
