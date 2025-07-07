import React, { lazy, Suspense } from 'react';

const Page1ltqw46 = lazy(() => import('./Page'));

const LazyPage1ltqw46 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltqw46 />
  </Suspense>
);

export { LazyPage1ltqw46 };
