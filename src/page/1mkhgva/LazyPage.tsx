import React, { lazy, Suspense } from 'react';

const Page1mkhgva = lazy(() => import('./Page'));

const LazyPage1mkhgva = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkhgva />
  </Suspense>
);

export { LazyPage1mkhgva };
