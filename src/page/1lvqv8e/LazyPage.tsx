import React, { lazy, Suspense } from 'react';

const Page1lvqv8e = lazy(() => import('./Page'));

const LazyPage1lvqv8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvqv8e />
  </Suspense>
);

export { LazyPage1lvqv8e };
