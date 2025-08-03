import React, { lazy, Suspense } from 'react';

const Page1mfu41i = lazy(() => import('./Page'));

const LazyPage1mfu41i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfu41i />
  </Suspense>
);

export { LazyPage1mfu41i };
