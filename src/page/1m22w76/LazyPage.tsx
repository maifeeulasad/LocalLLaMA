import React, { lazy, Suspense } from 'react';

const Page1m22w76 = lazy(() => import('./Page'));

const LazyPage1m22w76 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m22w76 />
  </Suspense>
);

export { LazyPage1m22w76 };
