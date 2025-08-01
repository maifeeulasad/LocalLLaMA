import React, { lazy, Suspense } from 'react';

const Page1mea2gf = lazy(() => import('./Page'));

const LazyPage1mea2gf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mea2gf />
  </Suspense>
);

export { LazyPage1mea2gf };
