import React, { lazy, Suspense } from 'react';

const Page1mj00mr = lazy(() => import('./Page'));

const LazyPage1mj00mr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj00mr />
  </Suspense>
);

export { LazyPage1mj00mr };
