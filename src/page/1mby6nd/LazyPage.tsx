import React, { lazy, Suspense } from 'react';

const Page1mby6nd = lazy(() => import('./Page'));

const LazyPage1mby6nd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mby6nd />
  </Suspense>
);

export { LazyPage1mby6nd };
