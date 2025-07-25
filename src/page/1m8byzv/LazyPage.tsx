import React, { lazy, Suspense } from 'react';

const Page1m8byzv = lazy(() => import('./Page'));

const LazyPage1m8byzv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8byzv />
  </Suspense>
);

export { LazyPage1m8byzv };
