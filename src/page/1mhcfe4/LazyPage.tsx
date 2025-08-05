import React, { lazy, Suspense } from 'react';

const Page1mhcfe4 = lazy(() => import('./Page'));

const LazyPage1mhcfe4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhcfe4 />
  </Suspense>
);

export { LazyPage1mhcfe4 };
