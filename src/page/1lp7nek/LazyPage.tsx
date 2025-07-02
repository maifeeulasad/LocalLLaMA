import React, { lazy, Suspense } from 'react';

const Page1lp7nek = lazy(() => import('./Page'));

const LazyPage1lp7nek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp7nek />
  </Suspense>
);

export { LazyPage1lp7nek };
