import React, { lazy, Suspense } from 'react';

const Page1mgiyg4 = lazy(() => import('./Page'));

const LazyPage1mgiyg4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgiyg4 />
  </Suspense>
);

export { LazyPage1mgiyg4 };
