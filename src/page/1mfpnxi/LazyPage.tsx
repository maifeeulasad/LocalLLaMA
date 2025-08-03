import React, { lazy, Suspense } from 'react';

const Page1mfpnxi = lazy(() => import('./Page'));

const LazyPage1mfpnxi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfpnxi />
  </Suspense>
);

export { LazyPage1mfpnxi };
