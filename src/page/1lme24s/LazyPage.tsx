import React, { lazy, Suspense } from 'react';

const Page1lme24s = lazy(() => import('./Page'));

const LazyPage1lme24s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lme24s />
  </Suspense>
);

export { LazyPage1lme24s };
