import React, { lazy, Suspense } from 'react';

const Page1ls5qjv = lazy(() => import('./Page'));

const LazyPage1ls5qjv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls5qjv />
  </Suspense>
);

export { LazyPage1ls5qjv };
