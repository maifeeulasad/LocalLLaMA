import React, { lazy, Suspense } from 'react';

const Page1m6eggp = lazy(() => import('./Page'));

const LazyPage1m6eggp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6eggp />
  </Suspense>
);

export { LazyPage1m6eggp };
