import React, { lazy, Suspense } from 'react';

const Page1mj1lj3 = lazy(() => import('./Page'));

const LazyPage1mj1lj3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj1lj3 />
  </Suspense>
);

export { LazyPage1mj1lj3 };
