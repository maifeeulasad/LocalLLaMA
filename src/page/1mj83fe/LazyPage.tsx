import React, { lazy, Suspense } from 'react';

const Page1mj83fe = lazy(() => import('./Page'));

const LazyPage1mj83fe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj83fe />
  </Suspense>
);

export { LazyPage1mj83fe };
