import React, { lazy, Suspense } from 'react';

const Page1m9rmry = lazy(() => import('./Page'));

const LazyPage1m9rmry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9rmry />
  </Suspense>
);

export { LazyPage1m9rmry };
