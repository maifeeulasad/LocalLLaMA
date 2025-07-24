import React, { lazy, Suspense } from 'react';

const Page1m7cagw = lazy(() => import('./Page'));

const LazyPage1m7cagw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7cagw />
  </Suspense>
);

export { LazyPage1m7cagw };
