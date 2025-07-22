import React, { lazy, Suspense } from 'react';

const Page1m61u94 = lazy(() => import('./Page'));

const LazyPage1m61u94 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m61u94 />
  </Suspense>
);

export { LazyPage1m61u94 };
