import React, { lazy, Suspense } from 'react';

const Page1mgmlzw = lazy(() => import('./Page'));

const LazyPage1mgmlzw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgmlzw />
  </Suspense>
);

export { LazyPage1mgmlzw };
