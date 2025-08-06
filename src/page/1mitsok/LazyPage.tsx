import React, { lazy, Suspense } from 'react';

const Page1mitsok = lazy(() => import('./Page'));

const LazyPage1mitsok = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mitsok />
  </Suspense>
);

export { LazyPage1mitsok };
