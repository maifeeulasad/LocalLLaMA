import React, { lazy, Suspense } from 'react';

const Page1mgmr6x = lazy(() => import('./Page'));

const LazyPage1mgmr6x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgmr6x />
  </Suspense>
);

export { LazyPage1mgmr6x };
