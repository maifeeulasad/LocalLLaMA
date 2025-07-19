import React, { lazy, Suspense } from 'react';

const Page1m3qejc = lazy(() => import('./Page'));

const LazyPage1m3qejc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3qejc />
  </Suspense>
);

export { LazyPage1m3qejc };
