import React, { lazy, Suspense } from 'react';

const Page1m6pw0o = lazy(() => import('./Page'));

const LazyPage1m6pw0o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6pw0o />
  </Suspense>
);

export { LazyPage1m6pw0o };
