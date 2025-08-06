import React, { lazy, Suspense } from 'react';

const Page1migo6d = lazy(() => import('./Page'));

const LazyPage1migo6d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1migo6d />
  </Suspense>
);

export { LazyPage1migo6d };
