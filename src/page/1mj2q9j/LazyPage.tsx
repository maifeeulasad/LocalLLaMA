import React, { lazy, Suspense } from 'react';

const Page1mj2q9j = lazy(() => import('./Page'));

const LazyPage1mj2q9j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2q9j />
  </Suspense>
);

export { LazyPage1mj2q9j };
