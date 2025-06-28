import React, { lazy, Suspense } from 'react';

const Page1haumxe = lazy(() => import('./Page'));

const LazyPage1haumxe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1haumxe />
  </Suspense>
);

export { LazyPage1haumxe };
