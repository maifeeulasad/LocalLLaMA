import React, { lazy, Suspense } from 'react';

const Page1mc7q0n = lazy(() => import('./Page'));

const LazyPage1mc7q0n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc7q0n />
  </Suspense>
);

export { LazyPage1mc7q0n };
