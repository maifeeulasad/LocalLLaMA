import React, { lazy, Suspense } from 'react';

const Page1m9q92z = lazy(() => import('./Page'));

const LazyPage1m9q92z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9q92z />
  </Suspense>
);

export { LazyPage1m9q92z };
