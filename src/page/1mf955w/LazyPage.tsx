import React, { lazy, Suspense } from 'react';

const Page1mf955w = lazy(() => import('./Page'));

const LazyPage1mf955w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf955w />
  </Suspense>
);

export { LazyPage1mf955w };
