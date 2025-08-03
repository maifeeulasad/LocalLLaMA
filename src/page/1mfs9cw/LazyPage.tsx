import React, { lazy, Suspense } from 'react';

const Page1mfs9cw = lazy(() => import('./Page'));

const LazyPage1mfs9cw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfs9cw />
  </Suspense>
);

export { LazyPage1mfs9cw };
