import React, { lazy, Suspense } from 'react';

const Page1mj7c6d = lazy(() => import('./Page'));

const LazyPage1mj7c6d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7c6d />
  </Suspense>
);

export { LazyPage1mj7c6d };
