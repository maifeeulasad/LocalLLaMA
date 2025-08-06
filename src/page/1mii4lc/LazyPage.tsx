import React, { lazy, Suspense } from 'react';

const Page1mii4lc = lazy(() => import('./Page'));

const LazyPage1mii4lc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mii4lc />
  </Suspense>
);

export { LazyPage1mii4lc };
