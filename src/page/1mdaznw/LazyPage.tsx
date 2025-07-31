import React, { lazy, Suspense } from 'react';

const Page1mdaznw = lazy(() => import('./Page'));

const LazyPage1mdaznw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdaznw />
  </Suspense>
);

export { LazyPage1mdaznw };
