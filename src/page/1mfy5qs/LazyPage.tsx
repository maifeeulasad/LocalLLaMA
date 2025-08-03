import React, { lazy, Suspense } from 'react';

const Page1mfy5qs = lazy(() => import('./Page'));

const LazyPage1mfy5qs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfy5qs />
  </Suspense>
);

export { LazyPage1mfy5qs };
