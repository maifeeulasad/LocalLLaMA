import React, { lazy, Suspense } from 'react';

const Page1meknnb = lazy(() => import('./Page'));

const LazyPage1meknnb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meknnb />
  </Suspense>
);

export { LazyPage1meknnb };
