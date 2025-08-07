import React, { lazy, Suspense } from 'react';

const Page1mj7i8b = lazy(() => import('./Page'));

const LazyPage1mj7i8b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7i8b />
  </Suspense>
);

export { LazyPage1mj7i8b };
