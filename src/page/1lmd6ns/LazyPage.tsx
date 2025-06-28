import React, { lazy, Suspense } from 'react';

const Page1lmd6ns = lazy(() => import('./Page'));

const LazyPage1lmd6ns = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmd6ns />
  </Suspense>
);

export { LazyPage1lmd6ns };
