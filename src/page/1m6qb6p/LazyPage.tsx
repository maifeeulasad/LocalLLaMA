import React, { lazy, Suspense } from 'react';

const Page1m6qb6p = lazy(() => import('./Page'));

const LazyPage1m6qb6p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qb6p />
  </Suspense>
);

export { LazyPage1m6qb6p };
