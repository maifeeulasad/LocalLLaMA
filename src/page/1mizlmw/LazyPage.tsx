import React, { lazy, Suspense } from 'react';

const Page1mizlmw = lazy(() => import('./Page'));

const LazyPage1mizlmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizlmw />
  </Suspense>
);

export { LazyPage1mizlmw };
