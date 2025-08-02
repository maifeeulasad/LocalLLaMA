import React, { lazy, Suspense } from 'react';

const Page1mf9exw = lazy(() => import('./Page'));

const LazyPage1mf9exw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf9exw />
  </Suspense>
);

export { LazyPage1mf9exw };
