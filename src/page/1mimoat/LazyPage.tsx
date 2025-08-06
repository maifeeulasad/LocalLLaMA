import React, { lazy, Suspense } from 'react';

const Page1mimoat = lazy(() => import('./Page'));

const LazyPage1mimoat = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mimoat />
  </Suspense>
);

export { LazyPage1mimoat };
