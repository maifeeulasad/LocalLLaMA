import React, { lazy, Suspense } from 'react';

const Page1lmbtvg = lazy(() => import('./Page'));

const LazyPage1lmbtvg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmbtvg />
  </Suspense>
);

export { LazyPage1lmbtvg };
