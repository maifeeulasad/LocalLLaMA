import React, { lazy, Suspense } from 'react';

const Page1mif3vd = lazy(() => import('./Page'));

const LazyPage1mif3vd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif3vd />
  </Suspense>
);

export { LazyPage1mif3vd };
