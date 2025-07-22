import React, { lazy, Suspense } from 'react';

const Page1m5vyku = lazy(() => import('./Page'));

const LazyPage1m5vyku = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5vyku />
  </Suspense>
);

export { LazyPage1m5vyku };
