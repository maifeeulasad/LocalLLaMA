import React, { lazy, Suspense } from 'react';

const Page1m5fg2y = lazy(() => import('./Page'));

const LazyPage1m5fg2y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5fg2y />
  </Suspense>
);

export { LazyPage1m5fg2y };
