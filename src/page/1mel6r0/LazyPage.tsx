import React, { lazy, Suspense } from 'react';

const Page1mel6r0 = lazy(() => import('./Page'));

const LazyPage1mel6r0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mel6r0 />
  </Suspense>
);

export { LazyPage1mel6r0 };
