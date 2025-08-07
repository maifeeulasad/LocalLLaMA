import React, { lazy, Suspense } from 'react';

const Page1mj7t51 = lazy(() => import('./Page'));

const LazyPage1mj7t51 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7t51 />
  </Suspense>
);

export { LazyPage1mj7t51 };
