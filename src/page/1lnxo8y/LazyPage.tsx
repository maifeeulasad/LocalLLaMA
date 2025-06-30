import React, { lazy, Suspense } from 'react';

const Page1lnxo8y = lazy(() => import('./Page'));

const LazyPage1lnxo8y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnxo8y />
  </Suspense>
);

export { LazyPage1lnxo8y };
