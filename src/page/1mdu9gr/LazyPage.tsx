import React, { lazy, Suspense } from 'react';

const Page1mdu9gr = lazy(() => import('./Page'));

const LazyPage1mdu9gr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdu9gr />
  </Suspense>
);

export { LazyPage1mdu9gr };
