import React, { lazy, Suspense } from 'react';

const Page1m6tf9v = lazy(() => import('./Page'));

const LazyPage1m6tf9v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6tf9v />
  </Suspense>
);

export { LazyPage1m6tf9v };
