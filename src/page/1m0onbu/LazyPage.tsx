import React, { lazy, Suspense } from 'react';

const Page1m0onbu = lazy(() => import('./Page'));

const LazyPage1m0onbu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0onbu />
  </Suspense>
);

export { LazyPage1m0onbu };
