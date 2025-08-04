import React, { lazy, Suspense } from 'react';

const Page1mgnwnx = lazy(() => import('./Page'));

const LazyPage1mgnwnx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgnwnx />
  </Suspense>
);

export { LazyPage1mgnwnx };
