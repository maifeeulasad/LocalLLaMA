import React, { lazy, Suspense } from 'react';

const Page1m9m8gw = lazy(() => import('./Page'));

const LazyPage1m9m8gw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9m8gw />
  </Suspense>
);

export { LazyPage1m9m8gw };
