import React, { lazy, Suspense } from 'react';

const Page1mj08lo = lazy(() => import('./Page'));

const LazyPage1mj08lo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj08lo />
  </Suspense>
);

export { LazyPage1mj08lo };
