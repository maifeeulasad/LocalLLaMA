import React, { lazy, Suspense } from 'react';

const Page1m7f43h = lazy(() => import('./Page'));

const LazyPage1m7f43h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7f43h />
  </Suspense>
);

export { LazyPage1m7f43h };
