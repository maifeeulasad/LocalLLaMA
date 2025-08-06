import React, { lazy, Suspense } from 'react';

const Page1mj1il5 = lazy(() => import('./Page'));

const LazyPage1mj1il5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj1il5 />
  </Suspense>
);

export { LazyPage1mj1il5 };
