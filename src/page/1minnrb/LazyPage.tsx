import React, { lazy, Suspense } from 'react';

const Page1minnrb = lazy(() => import('./Page'));

const LazyPage1minnrb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minnrb />
  </Suspense>
);

export { LazyPage1minnrb };
