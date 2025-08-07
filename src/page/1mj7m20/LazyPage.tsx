import React, { lazy, Suspense } from 'react';

const Page1mj7m20 = lazy(() => import('./Page'));

const LazyPage1mj7m20 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7m20 />
  </Suspense>
);

export { LazyPage1mj7m20 };
