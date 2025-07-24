import React, { lazy, Suspense } from 'react';

const Page1m78kyc = lazy(() => import('./Page'));

const LazyPage1m78kyc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m78kyc />
  </Suspense>
);

export { LazyPage1m78kyc };
