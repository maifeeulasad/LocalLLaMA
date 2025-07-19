import React, { lazy, Suspense } from 'react';

const Page1m3nah0 = lazy(() => import('./Page'));

const LazyPage1m3nah0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3nah0 />
  </Suspense>
);

export { LazyPage1m3nah0 };
