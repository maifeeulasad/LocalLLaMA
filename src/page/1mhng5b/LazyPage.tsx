import React, { lazy, Suspense } from 'react';

const Page1mhng5b = lazy(() => import('./Page'));

const LazyPage1mhng5b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhng5b />
  </Suspense>
);

export { LazyPage1mhng5b };
