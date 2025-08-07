import React, { lazy, Suspense } from 'react';

const Page1mj9e2y = lazy(() => import('./Page'));

const LazyPage1mj9e2y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj9e2y />
  </Suspense>
);

export { LazyPage1mj9e2y };
