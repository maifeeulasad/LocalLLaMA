import React, { lazy, Suspense } from 'react';

const Page1m9uwxg = lazy(() => import('./Page'));

const LazyPage1m9uwxg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9uwxg />
  </Suspense>
);

export { LazyPage1m9uwxg };
