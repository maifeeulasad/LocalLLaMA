import React, { lazy, Suspense } from 'react';

const Page1m06bru = lazy(() => import('./Page'));

const LazyPage1m06bru = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m06bru />
  </Suspense>
);

export { LazyPage1m06bru };
