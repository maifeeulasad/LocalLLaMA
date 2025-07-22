import React, { lazy, Suspense } from 'react';

const Page1m65iga = lazy(() => import('./Page'));

const LazyPage1m65iga = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m65iga />
  </Suspense>
);

export { LazyPage1m65iga };
