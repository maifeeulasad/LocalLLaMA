import React, { lazy, Suspense } from 'react';

const Page1m9wdxb = lazy(() => import('./Page'));

const LazyPage1m9wdxb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9wdxb />
  </Suspense>
);

export { LazyPage1m9wdxb };
