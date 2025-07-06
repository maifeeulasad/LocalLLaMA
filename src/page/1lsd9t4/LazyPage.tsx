import React, { lazy, Suspense } from 'react';

const Page1lsd9t4 = lazy(() => import('./Page'));

const LazyPage1lsd9t4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsd9t4 />
  </Suspense>
);

export { LazyPage1lsd9t4 };
