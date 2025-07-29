import React, { lazy, Suspense } from 'react';

const Page1mbf4wo = lazy(() => import('./Page'));

const LazyPage1mbf4wo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbf4wo />
  </Suspense>
);

export { LazyPage1mbf4wo };
