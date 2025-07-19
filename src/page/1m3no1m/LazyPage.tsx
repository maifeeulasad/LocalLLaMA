import React, { lazy, Suspense } from 'react';

const Page1m3no1m = lazy(() => import('./Page'));

const LazyPage1m3no1m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3no1m />
  </Suspense>
);

export { LazyPage1m3no1m };
