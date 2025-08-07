import React, { lazy, Suspense } from 'react';

const Page1mj71cg = lazy(() => import('./Page'));

const LazyPage1mj71cg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj71cg />
  </Suspense>
);

export { LazyPage1mj71cg };
