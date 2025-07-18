import React, { lazy, Suspense } from 'react';

const Page1m30ehv = lazy(() => import('./Page'));

const LazyPage1m30ehv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m30ehv />
  </Suspense>
);

export { LazyPage1m30ehv };
