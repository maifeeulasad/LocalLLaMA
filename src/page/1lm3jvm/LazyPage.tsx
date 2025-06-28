import React, { lazy, Suspense } from 'react';

const Page1lm3jvm = lazy(() => import('./Page'));

const LazyPage1lm3jvm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm3jvm />
  </Suspense>
);

export { LazyPage1lm3jvm };
