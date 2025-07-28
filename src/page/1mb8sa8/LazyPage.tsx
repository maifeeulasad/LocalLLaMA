import React, { lazy, Suspense } from 'react';

const Page1mb8sa8 = lazy(() => import('./Page'));

const LazyPage1mb8sa8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb8sa8 />
  </Suspense>
);

export { LazyPage1mb8sa8 };
