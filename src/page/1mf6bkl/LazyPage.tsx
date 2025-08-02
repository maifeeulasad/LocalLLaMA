import React, { lazy, Suspense } from 'react';

const Page1mf6bkl = lazy(() => import('./Page'));

const LazyPage1mf6bkl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf6bkl />
  </Suspense>
);

export { LazyPage1mf6bkl };
