import React, { lazy, Suspense } from 'react';

const Page1mf6gaa = lazy(() => import('./Page'));

const LazyPage1mf6gaa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf6gaa />
  </Suspense>
);

export { LazyPage1mf6gaa };
