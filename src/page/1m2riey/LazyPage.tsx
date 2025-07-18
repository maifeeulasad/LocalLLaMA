import React, { lazy, Suspense } from 'react';

const Page1m2riey = lazy(() => import('./Page'));

const LazyPage1m2riey = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2riey />
  </Suspense>
);

export { LazyPage1m2riey };
