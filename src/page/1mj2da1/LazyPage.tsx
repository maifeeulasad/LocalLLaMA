import React, { lazy, Suspense } from 'react';

const Page1mj2da1 = lazy(() => import('./Page'));

const LazyPage1mj2da1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2da1 />
  </Suspense>
);

export { LazyPage1mj2da1 };
