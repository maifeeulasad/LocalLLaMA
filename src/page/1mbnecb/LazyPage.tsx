import React, { lazy, Suspense } from 'react';

const Page1mbnecb = lazy(() => import('./Page'));

const LazyPage1mbnecb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbnecb />
  </Suspense>
);

export { LazyPage1mbnecb };
