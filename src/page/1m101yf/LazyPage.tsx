import React, { lazy, Suspense } from 'react';

const Page1m101yf = lazy(() => import('./Page'));

const LazyPage1m101yf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m101yf />
  </Suspense>
);

export { LazyPage1m101yf };
