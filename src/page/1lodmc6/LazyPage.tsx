import React, { lazy, Suspense } from 'react';

const Page1lodmc6 = lazy(() => import('./Page'));

const LazyPage1lodmc6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lodmc6 />
  </Suspense>
);

export { LazyPage1lodmc6 };
