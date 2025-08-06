import React, { lazy, Suspense } from 'react';

const Page1miwzbq = lazy(() => import('./Page'));

const LazyPage1miwzbq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwzbq />
  </Suspense>
);

export { LazyPage1miwzbq };
