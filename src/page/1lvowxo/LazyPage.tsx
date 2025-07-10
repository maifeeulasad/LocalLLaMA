import React, { lazy, Suspense } from 'react';

const Page1lvowxo = lazy(() => import('./Page'));

const LazyPage1lvowxo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvowxo />
  </Suspense>
);

export { LazyPage1lvowxo };
