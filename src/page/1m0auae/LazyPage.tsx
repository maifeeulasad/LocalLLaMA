import React, { lazy, Suspense } from 'react';

const Page1m0auae = lazy(() => import('./Page'));

const LazyPage1m0auae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0auae />
  </Suspense>
);

export { LazyPage1m0auae };
