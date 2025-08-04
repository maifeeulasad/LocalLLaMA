import React, { lazy, Suspense } from 'react';

const Page1mgrgmu = lazy(() => import('./Page'));

const LazyPage1mgrgmu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgrgmu />
  </Suspense>
);

export { LazyPage1mgrgmu };
