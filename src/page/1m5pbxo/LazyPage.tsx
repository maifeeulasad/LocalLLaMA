import React, { lazy, Suspense } from 'react';

const Page1m5pbxo = lazy(() => import('./Page'));

const LazyPage1m5pbxo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5pbxo />
  </Suspense>
);

export { LazyPage1m5pbxo };
