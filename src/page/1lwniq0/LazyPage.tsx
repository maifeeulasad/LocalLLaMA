import React, { lazy, Suspense } from 'react';

const Page1lwniq0 = lazy(() => import('./Page'));

const LazyPage1lwniq0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwniq0 />
  </Suspense>
);

export { LazyPage1lwniq0 };
