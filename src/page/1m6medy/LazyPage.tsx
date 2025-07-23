import React, { lazy, Suspense } from 'react';

const Page1m6medy = lazy(() => import('./Page'));

const LazyPage1m6medy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6medy />
  </Suspense>
);

export { LazyPage1m6medy };
