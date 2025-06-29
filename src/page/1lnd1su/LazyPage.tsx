import React, { lazy, Suspense } from 'react';

const Page1lnd1su = lazy(() => import('./Page'));

const LazyPage1lnd1su = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnd1su />
  </Suspense>
);

export { LazyPage1lnd1su };
