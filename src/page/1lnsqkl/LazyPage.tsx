import React, { lazy, Suspense } from 'react';

const Page1lnsqkl = lazy(() => import('./Page'));

const LazyPage1lnsqkl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnsqkl />
  </Suspense>
);

export { LazyPage1lnsqkl };
