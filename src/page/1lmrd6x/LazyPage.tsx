import React, { lazy, Suspense } from 'react';

const Page1lmrd6x = lazy(() => import('./Page'));

const LazyPage1lmrd6x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmrd6x />
  </Suspense>
);

export { LazyPage1lmrd6x };
