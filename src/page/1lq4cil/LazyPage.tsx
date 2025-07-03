import React, { lazy, Suspense } from 'react';

const Page1lq4cil = lazy(() => import('./Page'));

const LazyPage1lq4cil = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq4cil />
  </Suspense>
);

export { LazyPage1lq4cil };
