import React, { lazy, Suspense } from 'react';

const Page1m3a4yu = lazy(() => import('./Page'));

const LazyPage1m3a4yu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3a4yu />
  </Suspense>
);

export { LazyPage1m3a4yu };
