import React, { lazy, Suspense } from 'react';

const Page1mc7xjb = lazy(() => import('./Page'));

const LazyPage1mc7xjb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc7xjb />
  </Suspense>
);

export { LazyPage1mc7xjb };
