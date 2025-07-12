import React, { lazy, Suspense } from 'react';

const Page1lxo8za = lazy(() => import('./Page'));

const LazyPage1lxo8za = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxo8za />
  </Suspense>
);

export { LazyPage1lxo8za };
