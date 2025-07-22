import React, { lazy, Suspense } from 'react';

const Page1m6cfou = lazy(() => import('./Page'));

const LazyPage1m6cfou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6cfou />
  </Suspense>
);

export { LazyPage1m6cfou };
