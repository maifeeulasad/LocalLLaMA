import React, { lazy, Suspense } from 'react';

const Page1lyvsqv = lazy(() => import('./Page'));

const LazyPage1lyvsqv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyvsqv />
  </Suspense>
);

export { LazyPage1lyvsqv };
