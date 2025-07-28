import React, { lazy, Suspense } from 'react';

const Page1maxmeg = lazy(() => import('./Page'));

const LazyPage1maxmeg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maxmeg />
  </Suspense>
);

export { LazyPage1maxmeg };
