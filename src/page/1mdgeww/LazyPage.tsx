import React, { lazy, Suspense } from 'react';

const Page1mdgeww = lazy(() => import('./Page'));

const LazyPage1mdgeww = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdgeww />
  </Suspense>
);

export { LazyPage1mdgeww };
