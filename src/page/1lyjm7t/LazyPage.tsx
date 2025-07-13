import React, { lazy, Suspense } from 'react';

const Page1lyjm7t = lazy(() => import('./Page'));

const LazyPage1lyjm7t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyjm7t />
  </Suspense>
);

export { LazyPage1lyjm7t };
