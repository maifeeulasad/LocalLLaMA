import React, { lazy, Suspense } from 'react';

const Page1lrqj68 = lazy(() => import('./Page'));

const LazyPage1lrqj68 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrqj68 />
  </Suspense>
);

export { LazyPage1lrqj68 };
