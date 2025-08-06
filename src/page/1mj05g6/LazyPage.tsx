import React, { lazy, Suspense } from 'react';

const Page1mj05g6 = lazy(() => import('./Page'));

const LazyPage1mj05g6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj05g6 />
  </Suspense>
);

export { LazyPage1mj05g6 };
