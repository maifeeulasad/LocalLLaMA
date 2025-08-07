import React, { lazy, Suspense } from 'react';

const Page1mj8zya = lazy(() => import('./Page'));

const LazyPage1mj8zya = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8zya />
  </Suspense>
);

export { LazyPage1mj8zya };
