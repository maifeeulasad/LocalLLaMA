import React, { lazy, Suspense } from 'react';

const Page1luh8e2 = lazy(() => import('./Page'));

const LazyPage1luh8e2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luh8e2 />
  </Suspense>
);

export { LazyPage1luh8e2 };
