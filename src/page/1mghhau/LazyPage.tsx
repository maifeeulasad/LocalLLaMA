import React, { lazy, Suspense } from 'react';

const Page1mghhau = lazy(() => import('./Page'));

const LazyPage1mghhau = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mghhau />
  </Suspense>
);

export { LazyPage1mghhau };
