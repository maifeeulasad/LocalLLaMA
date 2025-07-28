import React, { lazy, Suspense } from 'react';

const Page1mb9b1t = lazy(() => import('./Page'));

const LazyPage1mb9b1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb9b1t />
  </Suspense>
);

export { LazyPage1mb9b1t };
