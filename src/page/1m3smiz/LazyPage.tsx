import React, { lazy, Suspense } from 'react';

const Page1m3smiz = lazy(() => import('./Page'));

const LazyPage1m3smiz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3smiz />
  </Suspense>
);

export { LazyPage1m3smiz };
