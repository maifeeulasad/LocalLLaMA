import React, { lazy, Suspense } from 'react';

const Page1m6xrfj = lazy(() => import('./Page'));

const LazyPage1m6xrfj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6xrfj />
  </Suspense>
);

export { LazyPage1m6xrfj };
