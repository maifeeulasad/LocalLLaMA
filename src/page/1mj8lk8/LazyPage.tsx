import React, { lazy, Suspense } from 'react';

const Page1mj8lk8 = lazy(() => import('./Page'));

const LazyPage1mj8lk8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8lk8 />
  </Suspense>
);

export { LazyPage1mj8lk8 };
