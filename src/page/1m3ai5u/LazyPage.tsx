import React, { lazy, Suspense } from 'react';

const Page1m3ai5u = lazy(() => import('./Page'));

const LazyPage1m3ai5u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3ai5u />
  </Suspense>
);

export { LazyPage1m3ai5u };
