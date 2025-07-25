import React, { lazy, Suspense } from 'react';

const Page1m8vegq = lazy(() => import('./Page'));

const LazyPage1m8vegq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vegq />
  </Suspense>
);

export { LazyPage1m8vegq };
