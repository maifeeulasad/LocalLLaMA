import React, { lazy, Suspense } from 'react';

const Page1m85vhw = lazy(() => import('./Page'));

const LazyPage1m85vhw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m85vhw />
  </Suspense>
);

export { LazyPage1m85vhw };
