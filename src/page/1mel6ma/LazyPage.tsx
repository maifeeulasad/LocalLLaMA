import React, { lazy, Suspense } from 'react';

const Page1mel6ma = lazy(() => import('./Page'));

const LazyPage1mel6ma = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mel6ma />
  </Suspense>
);

export { LazyPage1mel6ma };
