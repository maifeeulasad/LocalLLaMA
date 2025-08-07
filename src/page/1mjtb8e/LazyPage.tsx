import React, { lazy, Suspense } from 'react';

const Page1mjtb8e = lazy(() => import('./Page'));

const LazyPage1mjtb8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjtb8e />
  </Suspense>
);

export { LazyPage1mjtb8e };
