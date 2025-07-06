import React, { lazy, Suspense } from 'react';

const Page1lrzmk8 = lazy(() => import('./Page'));

const LazyPage1lrzmk8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrzmk8 />
  </Suspense>
);

export { LazyPage1lrzmk8 };
