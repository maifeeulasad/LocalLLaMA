import React, { lazy, Suspense } from 'react';

const Page1m5y9wj = lazy(() => import('./Page'));

const LazyPage1m5y9wj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5y9wj />
  </Suspense>
);

export { LazyPage1m5y9wj };
