import React, { lazy, Suspense } from 'react';

const Page1lsfpi0 = lazy(() => import('./Page'));

const LazyPage1lsfpi0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsfpi0 />
  </Suspense>
);

export { LazyPage1lsfpi0 };
