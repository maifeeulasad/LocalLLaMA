import React, { lazy, Suspense } from 'react';

const Page1mk9c1u = lazy(() => import('./Page'));

const LazyPage1mk9c1u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk9c1u />
  </Suspense>
);

export { LazyPage1mk9c1u };
