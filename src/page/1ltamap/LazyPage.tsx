import React, { lazy, Suspense } from 'react';

const Page1ltamap = lazy(() => import('./Page'));

const LazyPage1ltamap = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltamap />
  </Suspense>
);

export { LazyPage1ltamap };
