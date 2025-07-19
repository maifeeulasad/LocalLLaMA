import React, { lazy, Suspense } from 'react';

const Page1m3rnvw = lazy(() => import('./Page'));

const LazyPage1m3rnvw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3rnvw />
  </Suspense>
);

export { LazyPage1m3rnvw };
