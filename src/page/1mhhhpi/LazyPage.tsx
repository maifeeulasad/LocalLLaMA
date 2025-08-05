import React, { lazy, Suspense } from 'react';

const Page1mhhhpi = lazy(() => import('./Page'));

const LazyPage1mhhhpi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhhpi />
  </Suspense>
);

export { LazyPage1mhhhpi };
