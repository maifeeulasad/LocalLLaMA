import React, { lazy, Suspense } from 'react';

const Page1m2z38k = lazy(() => import('./Page'));

const LazyPage1m2z38k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2z38k />
  </Suspense>
);

export { LazyPage1m2z38k };
