import React, { lazy, Suspense } from 'react';

const Page1m3w96r = lazy(() => import('./Page'));

const LazyPage1m3w96r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3w96r />
  </Suspense>
);

export { LazyPage1m3w96r };
