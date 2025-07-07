import React, { lazy, Suspense } from 'react';

const Page1ltqb0n = lazy(() => import('./Page'));

const LazyPage1ltqb0n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltqb0n />
  </Suspense>
);

export { LazyPage1ltqb0n };
