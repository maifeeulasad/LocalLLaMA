import React, { lazy, Suspense } from 'react';

const Page1lxo0xc = lazy(() => import('./Page'));

const LazyPage1lxo0xc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxo0xc />
  </Suspense>
);

export { LazyPage1lxo0xc };
