import React, { lazy, Suspense } from 'react';

const Page1mab16n = lazy(() => import('./Page'));

const LazyPage1mab16n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mab16n />
  </Suspense>
);

export { LazyPage1mab16n };
