import React, { lazy, Suspense } from 'react';

const Page1mj339p = lazy(() => import('./Page'));

const LazyPage1mj339p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj339p />
  </Suspense>
);

export { LazyPage1mj339p };
