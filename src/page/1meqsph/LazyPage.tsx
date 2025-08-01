import React, { lazy, Suspense } from 'react';

const Page1meqsph = lazy(() => import('./Page'));

const LazyPage1meqsph = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meqsph />
  </Suspense>
);

export { LazyPage1meqsph };
