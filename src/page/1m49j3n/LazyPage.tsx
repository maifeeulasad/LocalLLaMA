import React, { lazy, Suspense } from 'react';

const Page1m49j3n = lazy(() => import('./Page'));

const LazyPage1m49j3n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m49j3n />
  </Suspense>
);

export { LazyPage1m49j3n };
